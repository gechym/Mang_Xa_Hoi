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
    allowNull: false,
  },
  user_id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
  comment_id: {
    type: Sequelize.DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Like;
