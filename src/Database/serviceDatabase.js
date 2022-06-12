import Sequelize from 'sequelize';

export const sequelize = new Sequelize('social_network', 'root', '', {
  host: process.env.HOST_DATABASE,
  post: process.env.PORT_HOST_DATABASE,
  dialect: 'mariadb',
  timezone: '+07:00',
  difine: {
    freezeTableName: true,
  },
  // sync: { alert: true },
  // query: { raw: true },
});
