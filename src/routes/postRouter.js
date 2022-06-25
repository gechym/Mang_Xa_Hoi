import express from 'express';
import { getPost, like, protect } from '../controller';

const postRoute = express.Router();

postRoute.route('/').get(protect, getPost);
postRoute.route('/like/:id/:checkId/:fieldName').get(protect, like);

export default postRoute;
