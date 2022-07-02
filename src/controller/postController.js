import { Op } from 'sequelize';
import AppError from '../util/AppError';
import catchAsync from '../util/catchAsync';
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

//TODO: CRUD Post
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
      postId: post.id,
      userPostId: post.user_id,
      userPosst: post.posts.name,
      contentPost: post.content,
      userAvatarPosst: post.posts.avatar,
      CommentPosts: post.commentsPost.map((comment) => {
        return {
          commentId: comment.id,
          userComentId: comment.comments.id_user,
          nameComment: comment.comments.name,
          avatarComment: comment.comments.avatar,
          contentComment: comment.content,
          createdAt: comment.createdAt,
          updatedAt: comment.updatedAt,
          likeComments: comment.likedComments.map((likeComment) => {
            return {
              likeCommentId: likeComment.id,
              userLikeCommentId: likeComment.userLike.id,
              nameUserLikeComment: likeComment.userLike.name,
              avatarUserLikeComment: likeComment.userLike.avatar,
            };
          }),
          replyComments: comment.replyComments.map((reply) => {
            return {
              replyCommentId: reply.id,
              userReplyCommentId: reply.userReplyComment.id_user,
              nameUserReplyComment: reply.userReplyComment.name,
              avatarUserReplyComment: reply.userReplyComment.avatar,
              contentReplyComment: reply.content,
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
          }),
        };
      }),
      likesPost: post.postLike.map((like) => {
        return {
          likeId: like.id,
          userLikeId: like.user_id,
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
    totalPost: await Post.count(),
    result: result.length,
    currentUser: req.user,
    page: queryPage,
    data: {
      posts: result,
    },
  });
});

export const createPost = catchAsync(async (req, res, next) => {
  const { content, images } = req.body;

  if (!content?.trim()) {
    return next(new AppError('Không để trống nội dung', 404));
  }

  const post = await Post.create({
    user_id: req.user.id,
    content: content,
  });

  return res.status(200).json({ message: 'success', post });
});

export const deletePost = catchAsync(async (req, res, next) => {
  const { postId } = req.params;

  if (!postId || !Number(postId) > 0) {
    return next(new AppError('Id không phù hợp', 404));
  }

  const postPrev = await Post.destroy({
    where: { id: postId, user_id: req.user.id },
  });

  if (!postPrev) {
    return next(new AppError('bài post không tồn tại', 404));
  }

  return res.status(200).json({ message: 'success', post: postPrev });
});

export const updatePost = catchAsync(async (req, res, next) => {
  const { postId } = req.params;
  const { content, images } = req.body;

  if (!Number(postId) > 0) {
    return next(new AppError('Id không phù hợp', 404));
  }

  if (!content?.trim()) {
    return next(new AppError('Nội dung không được để trống', 404));
  }

  const post = await Post.findOne({
    where: {
      user_id: req.user.id,
      id: postId,
    },
  });

  if (!post) {
    return next(new AppError('Post này không tồn tại', 404));
  }

  if (post.content === content?.trim()) {
    return next(new AppError('Vui lòng cung cấp nội dung mới để cập nhật', 404));
  }

  await Post.update(
    {
      content: content,
    },
    {
      where: {
        user_id: req.user.id,
        id: postId,
      },
    },
  );

  const postUpdated = await Post.findOne({
    where: {
      user_id: req.user.id,
      id: postId,
    },
  });

  return res.status(200).json({ message: 'success', post: postUpdated });
});

export const getPostById = (req, res, next) => {
  const postId = req.params.postId;

  req.query.id = postId;

  next();
};

// TODO: Handle like
export const like = catchAsync(async (req, res, next) => {
  const { id, checkId, fieldName } = req.params;

  let data = await checkLike(id, checkId, fieldName);

  if (!data) {
    try {
      //TODO: handle case các trường hợp nhập id người dùng hoặc post ko có thì xuất log
      await Like.create({
        user_id: id,
        [fieldName]: checkId,
      });
    } catch (error) {
      return next(new AppError('Thao tác nội dung không tồn tại', 404));
    }
  } else {
    try {
      await Like.destroy({
        where: {
          user_id: id,
          [fieldName]: checkId,
        },
      });
    } catch (error) {
      return next(new AppError('Thao tác nội dung không tồn tại', 404));
    }
  }

  return res.status(200).json({ message: 'success', status: `${data ? 'Đã hủy like' : 'Đã Like'}` });
});
