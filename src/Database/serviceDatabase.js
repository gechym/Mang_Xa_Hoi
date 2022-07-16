import Sequelize from 'sequelize';

export const sequelize = new Sequelize(process.env.NAME_DATA_BASE, process.env.NAME, process.env.PASSWORD, {
  host: process.env.HOST_DATABASE,
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
