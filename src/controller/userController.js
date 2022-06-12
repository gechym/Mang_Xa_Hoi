import User from '../module/User';
import UserInfo from '../module/UserInfo';
import catchAsync from '../util/catchAsync';

export const getUsers = catchAsync(async (req, res, next) => {
  const user = await User.findAll({
    attributes: {
      exclude: [`password`, `passwordChangeAt`, `passwordResetToken`, `passwordResetExpires`],
    },
    include: [UserInfo],
  });
  res.status(200).json({
    message: 'success',
    requestTime: req.requestTime,
    user: req.user,
    data: {
      user: user,
    },
  });
});

export const test = catchAsync(async (req, res, next) => {
  res.status(200).json({
    message: 'Success',
  });
});
