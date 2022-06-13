import UserInfo from '../module/UserInfo';
import User from '../module/User';
import { sequelize } from './serviceDatabase';
import UserRelationship from '../module/UserRelationship';

const connectDatabase = async () => {
  try {
    User.hasOne(UserInfo, { as: 'userInfor', foreignKey: 'id_user' });
    UserInfo.belongsTo(User, { as: 'user', foreignKey: 'id_user' });

    UserInfo.hasMany(UserRelationship, { as: 'userSend', foreignKey: 'user_send' });
    UserRelationship.belongsTo(UserInfo, { as: 'userSend', foreignKey: 'user_send' });

    UserInfo.hasMany(UserRelationship, { as: 'userReciver', foreignKey: 'user_reciver' });
    UserRelationship.belongsTo(UserInfo, { as: 'userReciver', foreignKey: 'user_reciver' });

    // sequelize
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
