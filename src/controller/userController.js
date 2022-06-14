import User from '../module/User';
import UserInfo from '../module/UserInfo';
import catchAsync from '../util/catchAsync';
import AppError from '../util/AppError';
import UserRelationship from '../module/UserRelationship';
import { Op } from 'sequelize';

const handleAddFriend = async (idUser, idFriend, next) => {
  const userInfor = await UserInfo.findOne({
    where: { id: Number(idUser) },
  });

  const userInfoFriend = await UserInfo.findOne({
    where: { id: Number(idFriend) },
  });

  if (userInfoFriend.listFriend) {
    const checkFriend = userInfoFriend.listFriend.find((user) => {
      return user.id === Number(idUser);
    });

    if (!checkFriend) {
      await UserInfo.update(
        {
          listFriend: [
            ...userInfoFriend.listFriend,
            { id: userInfor.id_user, name: userInfor.name, avatar: userInfor.avatar },
          ],
        },
        {
          where: { id: userInfoFriend.id },
        },
      );
    } else {
      return next(new AppError(`Bạn đã kết bạn với người này rồi`, 404));
    }
  } else {
    await UserInfo.update(
      {
        listFriend: [{ id: userInfor.id_user, name: userInfor.name, avatar: userInfor.avatar }],
      },
      {
        where: { id: userInfoFriend.id },
      },
    );
  }

  if (userInfor.listFriend) {
    const checkFriend = userInfor.listFriend.find((user) => {
      return user.id === Number(idFriend);
    });

    if (!checkFriend) {
      await UserInfo.update(
        {
          listFriend: [
            ...userInfor.listFriend,
            { id: userInfoFriend.id, name: userInfoFriend.name, avatar: userInfoFriend.avatar },
          ],
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
        listFriend: [{ id: userInfoFriend.id, name: userInfoFriend.name, avatar: userInfoFriend.avatar }],
      },
      {
        where: { id: userInfor.id },
      },
    );
  }
};

const checkCurrentUserAndFriend = async (userId, friendId, next) => {
  console.log(`👉👉👉👉👉 ${userId}`);
  //TODO: check friendId is already exists
  const friend = await UserInfo.findOne({
    where: { id_user: friendId },
  });

  if (!friend) return next(new AppError(`người bạn này không tồn tại`, 404));

  const user = await UserInfo.findOne({
    attributes: {
      exclude: [`password`, `passwordChangeAt`, `passwordResetToken`, `passwordResetExpires`],
    },
    where: { id_user: userId },
  });

  if (!user) {
    return next(new AppError(`Không thể tự kết bạn chính mình`, 404));
  }

  return { user: user, friend: friend };
};

export const getUsers = catchAsync(async (req, res, next) => {
  const user = await User.findAll({
    attributes: {
      exclude: [
        `password`,
        `passwordChangeAt`,
        `passwordResetToken`,
        'createdAt',
        'updatedAt',
        'deletedAt',
        `passwordResetExpires`,
      ],
    },
    include: [{ model: UserInfo, as: 'userInfor' }],
  });

  const userRelationship = await UserRelationship.findAll({
    include: [
      {
        model: UserInfo,
        as: 'userSend',
      },
      {
        model: UserInfo,
        as: 'userReciver',
      },
    ],
  });

  const userInfor = await UserInfo.findAll();
  res.status(200).json({
    message: 'success',
    requestTime: req.requestTime,
    user: req.user,
    data: {
      userRelationship: userRelationship,
      userInfor: userInfor,
      user: user,
    },
  });
});

//TODO: User case User
export const requestAddFriend = catchAsync(async (req, res, next) => {
  const { friendId } = req.params;

  //TODO: check friendId
  if (Number(friendId) === req.user.id) return next(new AppError(`Không thể tự kết bạn chính mình`, 404));

  //check is Friend already added
  const isFriend = await UserRelationship.findOne({
    where: {
      [Op.or]: [
        { user_send: Number(friendId), user_reciver: req.user.id, status: 'friend' },
        { user_send: req.user.id, user_reciver: Number(friendId), status: 'friend' },
      ],
    },
  });

  if (isFriend) return next(new AppError(`Bạn đã kết bạn với người dùng này rồi`, 404));

  const { user, friend } = await checkCurrentUserAndFriend(req.user.id, friendId, next);

  const checkRequestFromFriend = await UserRelationship.findOne({
    where: {
      [Op.or]: [
        { user_send: Number(friendId), user_reciver: req.user.id, status: 'pending' },
        { user_send: req.user.id, user_reciver: Number(friendId), status: 'pending' },
      ],
    },
  });

  if (checkRequestFromFriend) {
    return next(
      new AppError(
        `${friend.name} đã gửi lời mời kết bạn đến bạn, hoặc bạn đã gửi lời mời này cho ${friend.name} rồi`,
        404,
      ),
    );
  }

  await UserRelationship.create({
    user_send: user.id,
    user_reciver: friendId,
    status: 'pending',
  });

  return res.status(200).json({
    message: 'success',
  });
});

export const acceptAddFriend = catchAsync(async (req, res, next) => {
  const { friendId } = req.params;
  //TODO: check friendId
  if (Number(friendId) === req.user.id) return next(new AppError(`Id ko hợp lệ`, 404));

  const { user, friend } = await checkCurrentUserAndFriend(req.user.id, friendId, next);

  //check is Friend already added
  const isFriend = await UserRelationship.findOne({
    where: {
      [Op.or]: [
        { user_send: Number(friendId), user_reciver: req.user.id, status: 'friend' },
        { user_send: req.user.id, user_reciver: Number(friendId), status: 'friend' },
      ],
    },
  });

  if (isFriend) return next(new AppError(`Bạn đã kết bạn với người dùng này rồi`, 404));

  //TODO: check you have requestAddFriend to friendId
  const isHadRequestAddFriend = await UserRelationship.findOne({
    where: {
      user_send: req.user.id,
      user_reciver: Number(friendId),
      status: 'pending',
    },
  });

  if (isHadRequestAddFriend)
    return next(
      new AppError(
        'Bạn đã gửi lời mời đến người này rồi, Không thể vừa gửi kết bạn rồi tự đồng ý kết bạn',
        404,
      ),
    );

  //TODO: check friendId have request addFriend with me
  const checkRequestAddFriendFromFriend = await UserRelationship.findOne({
    where: {
      user_send: Number(friendId),
      user_reciver: req.user.id,
      status: 'pending',
    },
  });

  if (!checkRequestAddFriendFromFriend)
    return next(new AppError('Người bạn này chưa gửi lời mời kết bạn đến bạn'));

  await handleAddFriend(req.user.id, friendId, next);

  //TODO: Update user relationship status friend
  await UserRelationship.update(
    {
      status: 'friend',
    },
    {
      where: {
        id: checkRequestAddFriendFromFriend.id,
      },
    },
  );

  return res.status(200).json({
    message: 'success',
  });
});

export const removeFriend = catchAsync(async (req, res, next) => {
  const { friendId } = req.params;

  if (Number(friendId) === req.user.id) return next(new AppError('Id không được trùng', 400));

  const { user, friend } = await checkCurrentUserAndFriend(req.user.id, friendId, next);

  //TODO: check friendId and user have friend
  const checkFriend = await UserRelationship.findOne({
    where: {
      [Op.or]: [
        { user_send: Number(friendId), user_reciver: req.user.id, status: 'friend' },
        { user_send: req.user.id, user_reciver: Number(friendId), status: 'friend' },
      ],
    },
  });

  if (!checkFriend) return next(new AppError(`Bạn chưa kết bạn với người bạn này`, 404));

  //TODO: update List friend
  await UserInfo.update(
    {
      listFriend: friend.listFriend.filter((user) => user.id !== Number(req.user.id)),
    },
    {
      where: { id_user: Number(friendId) },
    },
  );

  //TODO: update List currentUser
  await UserInfo.update(
    {
      listFriend: user.listFriend.filter((user) => user.id !== Number(friendId)),
    },
    {
      where: { id_user: Number(req.user.id) },
    },
  );

  //TODO: delete Relationship friend with current user
  await UserRelationship.destroy({
    where: {
      id: checkFriend.id,
    },
  });

  res.status(200).json({
    message: 'success',
  });
});

export const getFriend = catchAsync(async (req, res, next) => {
  res.status(200).json({ message: 'success' });
});
