'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    };
    users.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        first_name: DataTypes.STRING,
        last_name: {
            allowNull: true,
            type: DataTypes.STRING
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        current_base: DataTypes.INTEGER,
        user_group: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
        status: {
            type: DataTypes.ENUM('0', '1'),
            allowNull: true,
            defaultValue: null,
            comment: "0 = non-active, 1 = active"
        },
        last_login: {
            allowNull: true,
            defaultValue: null,
            type: DataTypes.DATE
        },
        additional_permission: {
            allowNull: true,
            defaultValue: null,
            type: DataTypes.TEXT
        },
        created_by: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'users',
        underscored: true,
    });
    return users;
};