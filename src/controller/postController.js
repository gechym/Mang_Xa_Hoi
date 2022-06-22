import User from '../module/User';
import AppError from '../util/AppError';
import catchAsync from '../util/catchAsync';
import { Op } from 'sequelize';
import Post from '../module/Post';
import Comment from '../module/Comment';
import RepLyComment from '../module/RepComments';
import Like from '../module/Like';
import UserInfo from '../module/UserInfo';

export const getPost = catchAsync(async (req, res, next) => {
  const post = await Post.findAll({
    include: [{ model: UserInfo, as: 'posts' }],
  });

  const user = await UserInfo.findAll({
    include: [{ model: Post, as: 'posts' }],
  });

  return res.status(200).json({
    message: 'success',
    post,
    user,
  });
});
