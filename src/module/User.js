import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';
import bcryptjs from 'bcryptjs';

const User = sequelize.define(
  'tb_users',
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Email không phù hợp',
        },
      },

      unique: {
        msg: 'Đã có người đăng ký bằng email này, vui lòng thử email khác ',
      },
    },
    rule: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 100000000],
      },
      async set(value) {
        const hash = await bcryptjs.hashSync(value, 12);
        this.setDataValue('password', hash);
      },
    },
    passwordChangeAt: {
      type: Sequelize.DataTypes.DATE,
      default: null,
    },
    passwordResetToken: {
      type: Sequelize.DataTypes.STRING,
      default: null,
    },
    passwordResetExpires: {
      type: Sequelize.DataTypes.DATE,
      default: null,
    },
    active: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    paranoid: true,
  },
);

export default User;
