import { sequelize } from '../Database/serviceDatabase';
import Sequelize from 'sequelize';
import bcryptjs from 'bcryptjs';

const User = sequelize.define(
    'tb_users',
    {
        id: {
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
        },
        rule: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user',
        },
        email: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: 'Email không phù h',
                },

                // async isUnique(value) {
                //     const user = await User.findOne({ where: { email: value } });

                //     if (user) {
                //         throw new Error('Đã có người đăng ký bằng email này, vui lòng thử email khác oke');
                //     }
                // },
            },
            unique: {
                msg: 'Đã có người đăng ký bằng email này, vui lòng thử email khác ',
            },
        },
        password: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, 100000000],
            },
            async set(value) {
                // const rawValue = this.getDataValue('password')
                const hash = await bcryptjs.hashSync(value, 12);
                this.setDataValue('password', hash);
            },
        },
        passwordChangeAt: {
            type: Sequelize.DataTypes.DATE,
            default: null,
        },
        passwordResetToken: {
            type: Sequelize.DataTypes.STRING,
            default: null,
        },
        passwordResetExpires: {
            type: Sequelize.DataTypes.DATE,
            default: null,
        },
        photo: {
            type: Sequelize.DataTypes.STRING,
        },
        active: {
            type: Sequelize.DataTypes.BOOLEAN,
            defaultValue: true,
        },
        nickname: {
            type: Sequelize.DataTypes.VIRTUAL(Sequelize.STRING, ['name']),
            get() {
                return this.name + '20IT432';
            },
        },
    },
    {
        paranoid: true,
    },
);

export default User;
