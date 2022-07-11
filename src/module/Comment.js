import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

const Comment = sequelize.define('tb_comments', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  post_id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: Sequelize.DataTypes.STRING(567),
    allowNull: false,
  },
});

export default Comment;
