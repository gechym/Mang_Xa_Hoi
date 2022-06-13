import UserInfo from '../module/UserInfo';
import User from '../module/User';
import { sequelize } from './serviceDatabase';

const connectDatabase = async () => {
  try {
    User.hasOne(UserInfo, { as: 'userInfor', foreignKey: 'id_user' });
    UserInfo.belongsTo(User, { foreignKey: 'id_user' });

    User.hasOne(UserInfo, { as: 'userInfor2', foreignKey: 'id_user' });
    UserInfo.belongsTo(User, { foreignKey: 'id_user' });

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
