import Tour from '../module/Tour';
import { sequelize } from './serviceDatabase';

const connectDatabase = async () => {
    try {
        sequelize
            .sync({ force: true })
            .then((result) => {
                console.log('\n\n\n👉 Đồng bộ server thành công \n\n\n');
            })
            .catch((err) => {
                console.log(err);
            });
        await sequelize.authenticate();

        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default connectDatabase;
