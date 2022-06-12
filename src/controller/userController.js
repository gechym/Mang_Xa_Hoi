import User from '../module/User';
import UserInfo from '../module/UserInfo';
import catchAsync from '../util/catchAsync';
import AppError from '../util/AppError';

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

export const addFriend = catchAsync(async (req, res, next) => {
  const { friendId } = req.params;

  const user = await User.findOne({
    where: { id: req.user.id },
    include: [UserInfo],
  });

  if (!user) {
    return next(new AppError(`User not found`, 404));
  }

  // check friendId
  if (Number(friendId) === user.id) return next(new AppError(`User not found`, 404));

  const friend = await UserInfo.findOne({
    attributes: ['id', 'name', 'avatar'],
    where: { id: friendId },
  });

  // check friend found
  if (!friend) return next(new AppError(`Friend not found`, 404));

  const userInfor = await UserInfo.findOne({
    where: { id: user.id },
  });

  if (userInfor.listFriend) {
    const checkFriend = userInfor.listFriend.find((user) => {
      return user.id === Number(friendId);
    });

    if (!checkFriend) {
      await UserInfo.update(
        {
          listFriend: [...userInfor.listFriend, { id: friend.id, name: friend.name, avatar: friend.avatar }],
        },
        {
          where: { id: userInfor.id },
        },
      );
    } else {
      return next(new AppError(`Bạn đã kết bạn với người này rồi`, 404));
    }
  } else {
    await UserInfo.update(
      {
        listFriend: [{ id: friend.id, name: friend.name, avatar: friend.avatar }],
      },
      {
        where: { id: userInfor.id },
      },
    );
  }

  return res.status(200).json({
    message: 'success',
    userInfor,
    friend,
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
