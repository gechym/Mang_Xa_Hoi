import express from 'express';
import { getPost, like, protect, createPost, getPostById, deletePost, updatePost } from '../controller';

const postRoute = express.Router();
postRoute.route('/').get(protect, getPost).post(protect, createPost);
postRoute
  .route('/:postId')
  .get(protect, getPostById, getPost)
  .delete(protect, deletePost)
  .patch(protect, updatePost);

postRoute.route('/like/:id/:checkId/:fieldName').get(protect, like);

export default postRoute;
