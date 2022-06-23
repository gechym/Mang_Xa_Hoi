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
  let post_Comments_like = await Post.findAll({
    //TODO: Xuất các bài post kèm Các Comment , thông tin người đăng , số người like
    include: [
      {
        model: Comment,
        as: 'commentsPost',
        include: [
          {
            model: UserInfo,
            as: 'comments',
            attributes: ['id_user', 'name', 'avatar', 'createdAt', 'updatedAt'],
          },
        ],
      },
      {
        model: Like,
        as: 'postLike',
        include: [
          {
            model: UserInfo,
            as: 'userLike',
            attributes: ['id_user', 'name', 'avatar', 'createdAt', 'updatedAt'],
          },
        ],
      },
      { model: UserInfo, as: 'posts', attributes: ['id_user', 'name', 'avatar', 'createdAt', 'updatedAt'] },
    ],
  });

  let result = post_Comments_like.map((post) => {
    return {
      idPost: post.id,
      idUserPost: post.user_id,
      userPosst: post.posts.name,
      userAvatarPosst: post.posts.avatar,
      content: post.content,
      Comments: post.commentsPost.map((comment) => {
        return {
          idComment: comment.id,
          idUserComent: comment.comments.id_user,
          nameComment: comment.comments.name,
          avatarComment: comment.comments.avatar,
          contentComment: comment.content,
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt,
        };
      }),
      likes: post.postLike.map((like) => {
        return {
          idLike: like.id,
          idUserLike: like.user_id,
          nameUserLike: like.userLike.name,
          avatarUserLike: like.userLike.avatar,
        };
      }),
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };
  });

  return res.status(200).json({
    message: 'success',
    result,
  });
});
