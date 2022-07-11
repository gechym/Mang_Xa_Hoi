import express from 'express';
import { protect, getComment, createComment, deleteComment, updateComment } from '../controller';

const commentRouter = express.Router();
commentRouter.route('/').get(protect, getComment);
commentRouter.route('/:postId/create').post(protect, createComment);
commentRouter.route('/:commentId/delete').delete(protect, deleteComment);
commentRouter.route('/:commentId/update').patch(protect, updateComment);

export default commentRouter;
