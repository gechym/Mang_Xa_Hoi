import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

const UserRelationship = sequelize.define('tb_user_relationship', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  user_send: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  user_reciver: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.DataTypes.STRING,
    allowNull: true,
    default: 'pending',
  },
});

export default UserRelationship;
