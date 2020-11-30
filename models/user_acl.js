'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user_acl extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    };
    user_acl.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        user_id: DataTypes.INTEGER,
        invoicing: DataTypes.STRING,
        client: DataTypes.STRING,
        call_handling: DataTypes.STRING,
        mail_handling: DataTypes.STRING,
        visitor_handling: DataTypes.STRING,
        booking: DataTypes.STRING,
        product: DataTypes.STRING,
        location: DataTypes.STRING,
        serviced_office: DataTypes.STRING,
        deals: DataTypes.STRING,
        promo: DataTypes.STRING,
        created_by: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'user_acl',
        updatedAt: 'updated_at',
        createdAt: 'created_at',
        freezeTableName: true
    });

    return user_acl;
};