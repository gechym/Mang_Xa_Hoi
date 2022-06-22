import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

const RepLyComment = sequelize.define('tb_reply_comments', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  comment_id: {
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

export default RepLyComment;
