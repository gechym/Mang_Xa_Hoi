import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

const UserInfo = sequelize.define('tb_userInfo', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.DataTypes.STRING(255),
    allowNull: false,
    validate: {
      isCheckLength(value) {
        if (value.length < 5 || value.length > 1000) {
          throw new Error('Tên quá ngắn vui lòng thử lại ');
        }
      },
    },
  },
  avatar: {
    type: Sequelize.DataTypes.STRING(100000),
    allowNull: true,
    default:
      'https://i.pinimg.com/236x/dc/ef/3a/dcef3abedf0e0761203aaeb85886a6f3--jedi-knight-open-source.jpg',
  },
  Image_cover: {
    type: Sequelize.DataTypes.STRING(100000),
    allowNull: true,
    default: 'https://www.capturelandscapes.com/wp-content/uploads/2019/04/Desert-Nights.jpg',
  },
  Introduce: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
  },
  listFriend: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: true,
    get: function () {
      return JSON.parse(this.getDataValue('listFriend'));
    },
    set: function (val) {
      return this.setDataValue('listFriend', JSON.stringify(val));
    },
  },
  followers: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: true,
    get: function () {
      return JSON.parse(this.getDataValue('followers'));
    },
    set: function (val) {
      return this.setDataValue('followers', JSON.stringify(val));
    },
  },
  following: {
    type: Sequelize.DataTypes.TEXT,
    allowNull: true,
    get: function () {
      return JSON.parse(this.getDataValue('following'));
    },
    set: function (val) {
      return this.setDataValue('following', JSON.stringify(val));
    },
  },
});

export default UserInfo;
