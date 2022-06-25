import AppError from '../util/AppError';
import catchAsync from '../util/catchAsync';
import { Op } from 'sequelize';
import Post from '../module/Post';
import Comment from '../module/Comment';
import RepLyComment from '../module/RepComments';
import Like from '../module/Like';
import UserInfo from '../module/UserInfo';
import APIFeature from '../util/APIfeature';

const checkLike = async (idUer, idChek, fieldName) => {
  // post_id, comment_id, reply_comment_id:
  const dataLike = await Like.findOne({
    where: { user_id: idUer, [fieldName]: idChek },
    include: [
      { model: Post, as: 'postLike' },
      { model: Comment, as: 'likedComments' },
      { model: RepLyComment, as: 'repLyCommentLike' },
      { model: UserInfo, as: 'userLike' },
    ],
  });

  return dataLike;
};

export const getPost = catchAsync(async (req, res, next) => {
  const { queryWhere, querySort, queryLimit, queryPage, offset } = APIFeature(req.query);

  let post_Comments_like = await Post.findAll({
    //TODO: Xuất các bài post kèm Các Comment , thông tin người đăng , số người like

    where: {
      ...queryWhere,
    },
    order: [...querySort],
    offset,
    limit: queryLimit,

    include: [
      {
        model: Comment,
        as: 'commentsPost',

        include: [
          {
            model: Like,
            as: 'likedComments',
            include: [
              {
                model: UserInfo,
                as: 'userLike',
                attributes: ['id_user', 'name', 'avatar', 'createdAt', 'updatedAt'],
              },
            ],
          },
          {
            model: UserInfo,
            as: 'comments',
            attributes: ['id_user', 'name', 'avatar', 'createdAt', 'updatedAt'],
          },
          {
            model: RepLyComment,
            as: 'replyComments',
            include: [
              {
                model: UserInfo,
                as: 'userReplyComment',
                attributes: ['id_user', 'name', 'avatar', 'createdAt', 'updatedAt'],
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
          likeComments: comment.likedComments.map((likeComment) => {
            return {
              idLikeComment: likeComment.id,
              idUserLikeComment: likeComment.userLike.id,
              nameUserLikeComment: likeComment.userLike.name,
              avatarUserLikeComment: likeComment.userLike.avatar,
            };
          }),
          replyComments: comment.replyComments.map((reply) => {
            return {
              idReplyComment: reply.id,
              idUserReplyComment: reply.userReplyComment.id_user,
              nameUserReplyComment: reply.userReplyComment.name,
              avatarUserReplyComment: reply.userReplyComment.avatar,
              contentReplyComment: reply.content,
              likeReplyComment: reply.repLyCommentLike.map((likeReplyComment) => {
                return {
                  idLikeReplyComment: likeReplyComment.id,
                  idUserLikeReplyComment: likeReplyComment.userLike.id,
                  nameUserLikeReplyComment: likeReplyComment.userLike.name,
                  avatarUserLikeReplyComment: likeReplyComment.userLike.avatar,
                };
              }),
              createdAt: reply.createdAt,
              updatedAt: reply.updatedAt,
            };
          }),
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

export const like = catchAsync(async (req, res, next) => {
  const { id, checkId, fieldName } = req.params;

  let data = await checkLike(id, checkId, fieldName);

  if (!data) {
    try {
      data = await Like.create({
        user_id: id,
        [fieldName]: checkId,
      });
    } catch (error) {
      return next(new AppError('Nội dung không tồn tại'));
    }
  }

  return res.status(200).json({ message: 'success', data });
});
