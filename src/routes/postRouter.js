import express from 'express';
import { getPost } from '../controller';

const postRoute = express.Router();

postRoute.route('/').get(getPost);

export default postRoute;
