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
} from '../controller';

const userRouter = express.Router();

userRouter.route('/signup').post(signUp);
userRouter.route('/login').post(login);
userRouter.route('/forgot-password').patch(forgotPassword);
userRouter.route('/reset-password/:resetToken').patch(resetPassword);
userRouter.route('/changepassword').patch(protect, changePassword);

userRouter.route('/').get(protect, checkRules('admin'), getUsers);

export default userRouter;
