import { Op } from 'sequelize';
import AppError from '../util/AppError';
import catchAsync from '../util/catchAsync';
import Post from '../module/Post';
import Comment from '../module/Comment';
import RepLyComment from '../module/RepComments';
import Like from '../module/Like';
import UserInfo from '../module/UserInfo';
import APIFeature from '../util/APIfeature';

export const getCommentReply = catchAsync(async (req, res, next) => {
  const { queryWhere, querySort, queryLimit, queryPage, offset } = APIFeature(req.query);

  let Comment_like_reply_user = await RepLyComment.findAll({
    where: {
      ...queryWhere,
    },
    order: [...querySort],
    offset,
    limit: queryLimit,
    include: [
      {
        model: UserInfo,
        as: 'userReplyComment',
        attributes: ['id_user', 'name', 'avatar', 'createdAt', 'updatedAt'],
      },
      {
        model: Comment,
        as: 'replyComments',
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
        as: 'repLyCommentLike',
        include: [
          {
            model: UserInfo,
            as: 'userLike',
            attributes: ['id_user', 'name', 'avatar', 'createdAt', 'updatedAt'],
          },
        ],
      },
    ],
  });

  const data = Comment_like_reply_user.map((reply) => {
    return {
      replyCommentId: reply.id,
      userReplyCommentId: reply.userReplyComment.id_user,
      contentReplyComment: reply.content,
      nameUserReplyComment: reply.userReplyComment.name,
      avatarUserReplyComment: reply.userReplyComment.avatar,
      comment: {
        commentId: reply.comment_id,
        contentComment: reply.replyComments.content,
        userCommentId: reply.replyComments.comments.id_user,
        nameUserComment: reply.replyComments.comments.name,
        avatarUserComment: reply.replyComments.comments.avatar,
      },
      likeReplyComment: reply.repLyCommentLike.map((likeReplyComment) => {
        return {
          likeReplyCommentId: likeReplyComment.id,
          userLikeReplyCommentId: likeReplyComment.userLike.id,
          nameUserLikeReplyComment: likeReplyComment.userLike.name,
          avatarUserLikeReplyComment: likeReplyComment.userLike.avatar,
        };
      }),
      createdAt: reply.createdAt,
      updatedAt: reply.updatedAt,
    };
  });

  return res.status(200).json({
    message: 'success',
    totalPost: await RepLyComment.count(),
    result: data.length,
    currentUser: req.user,
    page: queryPage,
    data: {
      replyComments: data,
    },
  });
});
