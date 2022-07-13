import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import crypto from 'crypto';

import User from '../module/User';
import AppError from '../util/AppError';
import catchAsync from '../util/catchAsync';
import emailService from '../util/email';
import { Op } from 'sequelize';
import UserInfo from '../module/UserInfo';

const createToken = (newUser) => {
  return jwt.sign(
    {
      id: newUser.id,
      email: newUser.email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.TOKEN_JWT_HET_HAN,
    },
  );
};

const createRefreshToken = (newUser) => {
  return jwt.sign(
    {
      id: newUser.id,
      email: newUser.email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: process.env.REFRESH_TOKEN_JWT_HET_HAN,
    },
  );
};

export const signUp = catchAsync(async (req, res, next) => {
  const { email, password, passwordConfig, name, avatar, imageCover, introduce, address, phone } = req.body;
  if (!email || !password || !passwordConfig || !name) {
    return next(new AppError('Vui lòng điền đầy đủ thông tin', 404));
  }

  if (password !== passwordConfig) return next(new AppError('Không khớp mật khẩu', 404));

  if (password.length < 8) {
    return next(new AppError('Mật khẩu quá kếu vui lòng nhập trên 8 ký tự', 404));
  }

  const user = await User.create({
    email,
    password,
  });

  const userInfo = await UserInfo.create({
    name,
    avatar,
    image_cover: imageCover,
    introduce,
    address,
    phone,
    id_user: user.id,
  });

  const token = createToken(user);
  const refreshToken = createRefreshToken(user);

  res.cookie('jwt', token, {
    expires: new Date(Date.now() + process.env.COOKIE_HET_HAN * 24 * 60 * 60 * 1000),
    secure: true,
    httpOnly: true,
  });
  res.status(200).json({
    message: 'success',
    token: token,
    refreshToken: refreshToken,
    userInfo,
    user,
  });
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) return next(new AppError('Vui lòng nhập email và password', 404));

  const user = await User.findOne({
    where: { email: email },
    include: [
      {
        model: UserInfo,
        as: 'userInfor',
        attributes: ['name', 'avatar', 'image_cover', 'introduce', 'address', 'phone'],
      },
    ],
  });

  if (!user) return next(new AppError('Email không tồn tại, vui lòng thử lại', 404));

  const checkPassword = await bcryptjs.compare(password, user.password);

  if (!checkPassword) return next(new AppError('mật khẩu không đúng'), 404);

  const token = createToken(user);
  const refreshToken = createRefreshToken(user);

  res.cookie('jwt', token, {
    expires: new Date(Date.now() + process.env.COOKIE_HET_HAN * 24 * 60 * 60 * 1000),
    secure: true,
    httpOnly: true,
  });

  // const date1 = new Date(Date.now()).getTime(); // --> Timestamp
  // const date2 = new Date().toISOString(); //--> ISOString chưa cộng 0700
  // new Date(decode.iat * 1000).toLocaleString();

  // console.log(date1, date2, Date.now(), new Date(), new Date(date2));

  // res.cookie('jwt', token, {
  //   // gửi cookie cho clied để mỗi lần req sau clied sẽ tự động gửi về server
  //   expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
  //   // cookie này tồn tại 90n
  //   // secure:true,
  //   httpOnly: true,
  // });

  res.status(200).json({
    message: 'success',
    user: {
      id: user.id,
      email: user.email,
      rule: user.rule,
    },
    userInfo: user.userInfor,
    token: token,
    refreshToken: refreshToken,
  });
});

export const checkRules =
  (...rules) =>
  (req, res, next) => {
    if (!rules.includes(req.user.rule)) return next(new AppError('Bạn ko có quyền truy cập URL này', 404));

    next();
  };

export const refreshToken = catchAsync(async (req, res, next) => {
  const { authorization } = req.headers;
  let token;

  if (authorization && authorization.startsWith('Bearer')) {
    token = authorization.split(' ')[1];
  }
  if (!token) return next(new AppError('Bạn chưa đăng nhập', 404));

  // verify token

  let decode = {};

  try {
    decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(400).json({
        message: 'Token hết hạn vui lòng đăng nhập lại',
      });
    }

    return next(new AppError(error, 404));
  }

  decode = {
    ...decode,
    decode_iat: new Date(decode.iat * 1000).toLocaleString(),
    decode_exp: new Date(decode.exp * 1000).toLocaleString(),
  };
  console.log(decode);

  // check user
  const currentUser = await User.findOne({
    attributes: {
      exclude: ['password', 'passwordResetToken', 'passwordResetExpires', 'createdAt', 'updatedAt', 'deletedAt'],
    },
    where: {
      id: decode.id,
      email: decode.email,
    },
    include: [
      {
        model: UserInfo,
        as: 'userInfor',
        attributes: ['name', 'avatar', 'image_cover', 'introduce', 'address', 'phone'],
      },
    ],
  });
  if (!currentUser) {
    return next(new AppError('Lỗi xác thực danh tính ,Vui lòng đăng nhập lại', 404));
  }

  // // check đổi pass khi token còn hạn => bắt user login lại
  //FIXME: Nhớ lấy passwordChangeAt để check

  if (decode.iat * 1000 < currentUser?.passwordChangeAt?.getTime())
    return next(
      new AppError(
        `Bạn đã đổi password ngày ${new Date(currentUser.passwordChangeAt).toLocaleString('vn-vi', {
          hour12: false,
          timeStyle: 'medium',
          dateStyle: 'short',
        })} , vui lòng đăng nhập lại`,
        404,
      ),
    );

  // create new token and refresh token
  const tokenNew = createToken(currentUser);
  const refreshTokenNew = createRefreshToken(currentUser);

  return res.status(200).json({
    message: 'success',
    token: tokenNew,
    refreshToken: refreshTokenNew,
    user: currentUser,
    userInfo: currentUser.userInfor,
  });
});

export const protect = catchAsync(async (req, res, next) => {
  // lấy token
  const { authorization } = req.headers;
  let token;

  if (authorization && authorization.startsWith('Bearer')) {
    token = authorization.split(' ')[1];
  }
  if (!token) return next(new AppError('Bạn chưa đăng nhập', 404));

  // verify token

  let decode = {};

  try {
    decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(200).json({
        message: 'Token hết hạn vui lòng đăng nhập lại',
      });
    }

    return next(new AppError(error, 404));
  }

  decode = {
    ...decode,
    decode_iat: new Date(decode.iat * 1000).toLocaleString(),
    decode_exp: new Date(decode.exp * 1000).toLocaleString(),
  };
  console.log(decode);

  // check user
  const currentUser = await User.findOne({
    attributes: {
      exclude: ['password', 'passwordResetToken', 'passwordResetExpires', 'createdAt', 'updatedAt', 'deletedAt'],
    },
    where: {
      id: decode.id,
      email: decode.email,
    },
  });
  if (!currentUser) {
    return next(new AppError('Lỗi xác thực danh tính ,Vui lòng đăng nhập lại', 404));
  }

  // // check đổi pass khi token còn hạn => bắt user login lại
  //FIXME: Nhớ lấy passwordChangeAt để check

  if (decode.iat * 1000 < currentUser?.passwordChangeAt?.getTime())
    return next(
      new AppError(
        `Bạn đã đổi password ngày ${new Date(currentUser.passwordChangeAt).toLocaleString('vn-vi', {
          hour12: false,
          timeStyle: 'short',
          dateStyle: 'short',
        })} , vui lòng đăng nhập lại`,
        404,
      ),
    );

  req.user = currentUser;
  next();
});

export const forgotPassword = catchAsync(async (req, res, next) => {
  // await User.sync({ alted: true });
  const { email } = req.body;

  if (!email) return next(new AppError('Vui lòng nhập email', 404));

  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    return next(new AppError('Email không tồn tại', 404));
  }

  const resetToken = crypto.randomBytes(32).toString('hex');

  const passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex'); // mã hóa token

  const passwordResetExpires = Date.now() + 10 * 60 * 1000; // tạo thời hạn cho token có hiệu lực là 10p

  await User.update(
    {
      passwordResetToken: passwordResetToken,
      passwordResetExpires: passwordResetExpires,
    },
    {
      where: {
        email: email,
      },
    },
  );

  const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;

  try {
    await emailService({
      to: user.email,
      subject: 'Đặt lại password',
      message: resetURL,
    });
  } catch (error) {
    return next(new AppError('Gửi email thất bại vui lòng thử lại' + error, 404));
  }

  res.status(200).json({
    message: 'success',
    user: {
      id: user.id,
      email: user.email,
      rule: user.rule,
    },
    resetToken,
  });
});

export const resetPassword = catchAsync(async (req, res, next) => {
  const { resetToken } = req.params;
  const { password, passwordConfig } = req.body;

  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

  if (!password || !passwordConfig) return next(new AppError('Vui lòng cung cấp đầy đủ thông tin', 404));

  const user = await User.findOne({
    where: {
      passwordResetToken: hashedToken,
      passwordResetExpires: {
        [Op.gt]: new Date(),
      },
    },
  });

  if (!user) return next(new AppError('Token hết hạn hoặc không hợp lệ vui lòng thử lại', 404));

  if (password !== passwordConfig) {
    return next(new AppError('mật khẩu xác thực khác nhau', 404));
  }

  const passwordChangeAt = new Date(Date.now() + 10000);

  await User.update(
    {
      password: password,
      passwordChangeAt: passwordChangeAt,
      passwordResetToken: null,
      passwordResetExpires: null,
    },
    {
      where: {
        email: user.email,
      },
    },
  );

  const token = createToken(user);
  const refreshToken = createRefreshToken(user);

  res.cookie('jwt', token, {
    expires: new Date(Date.now() + process.env.COOKIE_HET_HAN * 24 * 60 * 60 * 1000),
    secure: true,
    httpOnly: true,
  });

  res.status(200).json({
    message: 'success',
    token: token,
    refreshToken: refreshToken,
    user: {
      id: user.id,
      email: user.email,
      rule: user.rule,
    },
    data: {
      user: user,
    },
  });
});

export const changePassword = catchAsync(async (req, res, next) => {
  const { password, passwordConfig, currentPassword } = req.body;

  if (!password || !passwordConfig || !currentPassword) {
    return next(new AppError('Vui lòng cung cấp đầy đủ thông tin', 404));
  }

  const user = await User.findOne({ where: { email: req.user.email } });

  if (!user) return next(new AppError('Người dùng ko tồn tại', 404));

  const checkPassword = await bcryptjs.compare(currentPassword, user.password);

  if (!checkPassword) {
    return next(new AppError('Mật khẩu hiện tại ko đúng vui lòng kiểm tra lại', 404));
  }

  if (password !== passwordConfig) {
    return next(new AppError('password config ko giống nhau', 404));
  }

  await User.update(
    {
      password: password,
      passwordChangeAt: new Date(Date.now() + 10000),
    },
    {
      where: {
        email: user.email,
      },
    },
  );

  const token = createToken(user);
  const refreshToken = createRefreshToken(user);

  res.cookie('jwt', token, {
    expires: new Date(Date.now() + process.env.COOKIE_HET_HAN * 24 * 60 * 60 * 1000),
    secure: true,
    httpOnly: true,
  });

  res.status(200).json({
    message: 'success',
    user: {
      id: user.id,
      email: user.email,
      rule: user.rule,
    },
    token,
    refreshToken,
  });
});
