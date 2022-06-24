import { sequelize } from './serviceDatabase';
import UserInfo from '../module/UserInfo';
import User from '../module/User';
import UserRelationship from '../module/UserRelationship';
import Post from '../module/Post';
import Comment from '../module/Comment';
import RepLyComment from '../module/RepComments';
import Like from '../module/Like';

const connectDatabase = async () => {
  try {
    User.hasOne(UserInfo, { as: 'userInfor', foreignKey: 'id_user' });
    UserInfo.belongsTo(User, { as: 'user', foreignKey: 'id_user' });

    UserInfo.hasMany(UserRelationship, { as: 'userSend', foreignKey: 'user_send' });
    UserRelationship.belongsTo(UserInfo, { as: 'userSend', foreignKey: 'user_send' });

    UserInfo.hasMany(UserRelationship, { as: 'userReciver', foreignKey: 'user_reciver' });
    UserRelationship.belongsTo(UserInfo, { as: 'userReciver', foreignKey: 'user_reciver' });

    UserInfo.hasMany(Post, { as: 'posts', foreignKey: 'user_id' });
    Post.belongsTo(UserInfo, { as: 'posts', foreignKey: 'user_id' });

    Post.hasMany(Comment, { as: 'commentsPost', foreignKey: 'post_id' });
    Comment.belongsTo(Post, { as: 'commentsPost', foreignKey: 'post_id' });

    UserInfo.hasMany(Comment, { as: 'comments', foreignKey: 'user_id' });
    Comment.belongsTo(UserInfo, { as: 'comments', foreignKey: 'user_id' });

    Comment.hasMany(RepLyComment, { as: 'replyComments', foreignKey: 'comment_id' });
    RepLyComment.belongsTo(Comment, { as: 'replyComments', foreignKey: 'comment_id' });

    UserInfo.hasMany(RepLyComment, { as: 'userReplyComment', foreignKey: 'user_id' });
    RepLyComment.belongsTo(UserInfo, { as: 'userReplyComment', foreignKey: 'user_id' });

    Comment.hasMany(Like, { as: 'likedComments', foreignKey: 'comment_id' });
    Like.belongsTo(Comment, { as: 'likedComments', foreignKey: 'comment_id' });

    Post.hasMany(Like, { as: 'postLike', foreignKey: 'post_id' });
    Like.belongsTo(Post, { as: 'postLike', foreignKey: 'post_id' });

    RepLyComment.hasMany(Like, { as: 'repLyCommentLike', foreignKey: 'reply_comment_id' });
    Like.belongsTo(RepLyComment, { as: 'repLyCommentLike', foreignKey: 'reply_comment_id' });

    UserInfo.hasMany(Like, { as: 'userLike', foreignKey: 'user_id' });
    Like.belongsTo(UserInfo, { as: 'userLike', foreignKey: 'user_id' });

    // await sequelize
    //   .sync({ force: true })
    //   .then((result) => {
    //     console.log('\n\n\n👉 Đồng bộ server thành công \n\n\n');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default connectDatabase;
