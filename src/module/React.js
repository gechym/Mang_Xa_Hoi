import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';

const Reaction = sequelize.define('tb_reactions', {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.DataTypes.STRING(567),
    allowNull: false,
  },
});

export default Reaction;
