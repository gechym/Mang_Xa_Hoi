import express from 'express';
import {
  getUsers,
  login,
  signUp,
  protect,
  checkRules,
  forgotPassword,
  resetPassword,
  changePassword,
  addFriend,
} from '../controller';

const userRouter = express.Router();

userRouter.route('/signup').post(signUp);
userRouter.route('/login').post(login);
userRouter.route('/forgotPassword').patch(forgotPassword);
userRouter.route('/resetPassword/:resetToken').patch(resetPassword);
userRouter.route('/changepassword').patch(protect, changePassword);
userRouter.route('/friends/:friendId').patch(protect, addFriend);

userRouter.route('/').get(protect, checkRules('admin'), getUsers);

export default userRouter;
