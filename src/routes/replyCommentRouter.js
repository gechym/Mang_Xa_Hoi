import express from 'express';
import { protect } from '../controller';
import { getCommentReply } from '../controller/commentReplyController';
const replyCommentRouter = express.Router();

replyCommentRouter.route('/').get(protect, getCommentReply);

export default replyCommentRouter;
