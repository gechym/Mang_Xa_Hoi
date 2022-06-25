import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

const Post = sequelize.define('tb_posts', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
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
  images: {
    type: Sequelize.DataTypes.JSON,
    allowNull: true,
  },
});

export default Post;
