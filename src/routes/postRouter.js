import express from 'express';
import { getPost, like } from '../controller';

const postRoute = express.Router();

postRoute.route('/').get(getPost);
postRoute.route('/like/:id/:checkId/:fieldName').get(like);

export default postRoute;
