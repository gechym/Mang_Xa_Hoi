import Sequelize from 'sequelize';

export const sequelize = new Sequelize('bfkkfiaesmqwcs8hivyb', 'uzeqrtiutcjrh1gz', 'FRSYEnvfWPWBHFimwelW', {
  host: 'bfkkfiaesmqwcs8hivyb-mysql.services.clever-cloud.com',
  post: process.env.PORT_HOST_DATABASE,
  dialect: 'mysql',
  timezone: '+07:00',
  difine: {
    freezeTableName: true,
  },
  // logging: false,
  // sync: { alert: true },
  // query: { raw: true },
});
// mysql://uzeqrtiutcjrh1gz:FRSYEnvfWPWBHFimwelW@bfkkfiaesmqwcs8hivyb-mysql.services.clever-cloud.com:3306/bfkkfiaesmqwcs8hivyb
