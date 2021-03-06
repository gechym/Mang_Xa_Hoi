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
  requestAddFriend,
  acceptAddFriend,
  removeFriend,
  getStatusFriend,
  deleteAcceptAddFriend,
  disagreeAddFriend,
  getListFriend,
  refreshToken,
} from '../controller';

const userRouter = express.Router();

// userRouter.route('/').get(getUsers);
userRouter.route('/').get(protect, checkRules('admin', 'user'), getUsers);
userRouter.route('/signup').post(signUp);
userRouter.route('/login').post(login);
userRouter.route('/refreshToken').get(refreshToken);
userRouter.route('/forgotPassword').patch(forgotPassword);
userRouter.route('/resetPassword/:resetToken').patch(resetPassword);
userRouter.route('/changepassword').patch(protect, changePassword);

userRouter.route('/requestAddFriend/:friendId').post(protect, requestAddFriend);
userRouter.route('/acceptAddFriend/:friendId').patch(protect, acceptAddFriend);
userRouter.route('/disagreeAddFriend/:friendId').delete(protect, disagreeAddFriend);
userRouter.route('/deleteRequestAddFriend/:friendId').delete(protect, deleteAcceptAddFriend);
userRouter.route('/removeFriend/:friendId').patch(protect, removeFriend);
userRouter.route('/getStatusFriend/:friendId').get(protect, getStatusFriend);
userRouter.route('/getListFriend/:id').get(protect, getListFriend);

export default userRouter;
