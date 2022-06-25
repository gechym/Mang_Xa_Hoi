import express from 'express';
import { protect, getComment, createComment } from '../controller';

const commentRouter = express.Router();
commentRouter.route('/').get(protect, getComment);
commentRouter.route('/:postId/create').post(protect, createComment);
// .post(protect, createPost);
// commentRouter.route('/:postId').get(getPostById, getPost).delete(protect, deletePost).patch(protect, updatePost);

export default commentRouter;
