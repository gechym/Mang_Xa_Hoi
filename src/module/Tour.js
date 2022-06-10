import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';
import slug from 'slug';

const Tour = sequelize.define('tb_tours', {
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.DataTypes.STRING(100000),
        allowNull: false,
        // validate: {
        // },
        unique: {
            msg: 'Đã có người đăng ký bằng tên này, vui lòng thử tên khác ',
        },
        validate: {
            len: [10, 200],
        },
        set(value) {
            this.setDataValue('name', value.trim());
        },
    },
    slug: {
        type: Sequelize.DataTypes.VIRTUAL(Sequelize.STRING, ['name']),
        get() {
            return slug(this.name, { trim: true, lower: true });
        },
    },
    duration: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        // validate: {
        // },
    },
    maxGroupSize: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        // validate: {
        // },
    },
    difficulty: {
        type: Sequelize.DataTypes.STRING(100000),
        allowNull: false,
        // validate: {
        // },
        set(value) {
            this.setDataValue('difficulty', value.trim());
        },
    },
    rating: {
        type: Sequelize.DataTypes.FLOAT,
        default: 4.5,
        // allowNull: false,
        validate: {
            max: {
                args: 5,
                message: 'tối đa chỉ được đáng giá 5s',
            },
            min: {
                args: 1,
                message: 'tối thiểu chỉ được đáng giá 1s',
            },
        },
    },
    ratingsAverage: {
        type: Sequelize.DataTypes.FLOAT,
        default: 4.5,
    },
    ratingsQuantity: {
        type: Sequelize.DataTypes.FLOAT,
        default: 4.5,
    },
    price: {
        type: Sequelize.DataTypes.FLOAT,
        validate: {
            isNull(val) {
                if (!val) {
                    throw new Error('Ko thể để trống giá');
                }
            },
        },
        allowNull: true,
    },
    priceDiscount: {
        type: Sequelize.DataTypes.FLOAT,
        // allowNull: false,
        default: 0,
        validate: {
            isCheckPrice(value) {
                if (value > this.price) {
                    throw new Error('Giá giảm giá không hợp lệ' + this.price);
                }
            },
        },
    },
    summary: {
        type: Sequelize.DataTypes.STRING(100000),
        allowNull: false,
        // validate: {
        // },
        set(value) {
            this.setDataValue('summary', value.trim());
        },
    },
    description: {
        type: Sequelize.DataTypes.STRING(100000),
        allowNull: false,
        // validate: {
        // },
        set(value) {
            this.setDataValue('description', value.trim());
        },
    },
    imageCover: {
        type: Sequelize.DataTypes.STRING(100000),
        allowNull: false,
        // validate: {
        // },
    },
    images: {
        type: Sequelize.DataTypes.STRING(100000),
        get: function () {
            return JSON.parse(this.getDataValue('images'));
        },
        set: function (val) {
            return this.setDataValue('images', JSON.stringify(val));
        },
    },
    startDates: {
        type: Sequelize.DataTypes.STRING(100000),
        get: function () {
            return JSON.parse(this.getDataValue('images'));
        },
        set: function (val) {
            return this.setDataValue('startDates', JSON.stringify(val));
        },
    },
});

export default Tour;
