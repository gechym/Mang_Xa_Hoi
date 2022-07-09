import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

const Like = sequelize.define('tb_likes', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  post_id: {
    type: Sequelize.DataTypes.INTEGER,
  },
  user_id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  comment_id: {
    type: Sequelize.DataTypes.INTEGER,
  },
  reply_comment_id: {
    type: Sequelize.DataTypes.INTEGER,
  },
  reaction_id: {
    type: Sequelize.DataTypes.INTEGER,
  },
});

export default Like;
