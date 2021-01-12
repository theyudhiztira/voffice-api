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
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        phone_number: DataTypes.STRING,
        whatsapp: DataTypes.STRING,
        dob: DataTypes.STRING,
        tax_id: DataTypes.STRING,
        id_no: DataTypes.INTEGER,
        location: DataTypes.INTEGER,
        address: DataTypes.STRING,
        dob: DataTypes.DATEONLY,
        company_name: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 1,
            comment: "0 = non-active, 1 = active"
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 25
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'users',
        underscored: true,
    });
    return users;
};