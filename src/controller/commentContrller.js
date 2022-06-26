//TODO: CRUD Comment
import AppError from '../util/AppError';
import catchAsync from '../util/catchAsync';
import Comment from '../module/Comment';
import RepLyComment from '../module/RepComments';
import Like from '../module/Like';
import UserInfo from '../module/UserInfo';
import APIFeature from '../util/APIfeature';

export const getComment = catchAsync(async (req, res, next) => {
  const { queryWhere, querySort, queryLimit, queryPage, offset } = APIFeature(req.query);

  console.log(req.query);

  let Comment_like_reply_user = await Comment.findAll({
    //TODO: Xuất các bài post kèm Các Comment , thông tin người đăng , số người like

    where: {
      ...queryWhere,
    },
    order: [...querySort],
    offset,
    limit: queryLimit,
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
  });

  let result = Comment_like_reply_user.map((comment) => {
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
  });

  return res.status(200).json({
    message: 'success',
    result,
  });
});

export const createComment = catchAsync(async (req, res, next) => {
  const { content } = req.body;
  const { postId } = req.params;

  if (!content?.trim()) {
    return next(new AppError('Không để trống nội dung', 404));
  }

  if (!Number(postId)) {
    return next(new AppError('Id không được để trống', 404));
  }

  try {
    const comment = await Comment.create({
      user_id: req.user.id,
      post_id: postId,
      content: content,
    });
    return res.status(200).json({ message: 'success', comment });
  } catch (error) {
    return next(new AppError('Người dùng này hoặc bài post này không tồn tại', 404));
  }
});

export const deleteComment = catchAsync(async (req, res, next) => {
  const { commentId } = req.params;

  if (!commentId || !Number(commentId) > 0) {
    return next(new AppError('Id không phù hợp', 404));
  }

  const CommentPrev = await Comment.destroy({
    where: { id: commentId, user_id: req.user.id },
  });

  if (!CommentPrev) {
    return next(new AppError('comment không tồn tại', 404));
  }

  return res.status(200).send({ message: 'success', CommentPrev });
});

export const updateComment = catchAsync(async (req, res, next) => {
  const { commentId } = req.params;
  const { content } = req.body;

  if (!commentId || !Number(commentId) > 0) return next(new AppError(`Comment ${commentId} không tồn tại`));

  if (!content?.trim()) {
    return next(new AppError('Nội dung không được để trống', 404));
  }

  const comment = await Comment.findOne({
    where: {
      id: commentId,
      user_id: req.user.id,
    },
  });

  if (!comment) {
    return next(new AppError('Comment này không tồn tại', 404));
  }

  if (comment.content === content) {
    return next(new AppError('Vui lòng cong cấp nộp dung mới để cập nhật', 404));
  }

  await Comment.update(
    {
      content: content,
    },
    {
      where: {
        user_id: req.user.id,
        id: commentId,
      },
    },
  );

  const commentUpdated = await Comment.findOne({
    where: {
      user_id: req.user.id,
      id: commentId,
    },
  });

  return res.status(200).send({ message: 'success', commentUpdated });
});
