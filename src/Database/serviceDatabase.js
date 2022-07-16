import Sequelize from 'sequelize';

export const sequelize = new Sequelize('social_network', 'root', '', {
  host: '127.0.0.1',
  post: '3306',
  dialect: 'mariadb',
  timezone: '+07:00',
  difine: {
    freezeTableName: true,
  },
  // logging: false,
  // sync: { alert: true },
  // query: { raw: true },
});
// mysql://uzeqrtiutcjrh1gz:FRSYEnvfWPWBHFimwelW@bfkkfiaesmqwcs8hivyb-mysql.services.clever-cloud.com:3306/bfkkfiaesmqwcs8hivyb
