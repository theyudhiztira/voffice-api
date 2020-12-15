'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class invoices_ht extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    invoices_ht.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        location_id: DataTypes.STRING,
        client_id: DataTypes.STRING,
        client_plan_id: DataTypes.TEXT,
        promo_id: DataTypes.INTEGER,
        currency: DataTypes.STRING,
        tax_id: DataTypes.STRING,
        timezone: DataTypes.STRING,
        center_email: DataTypes.STRING,
        start_time: DataTypes.INTEGER,
        end_time: DataTypes.INTEGER,
        weekend_start_time: DataTypes.INTEGER,
        weekend_end_time: DataTypes.INTEGER,
        coordinates: DataTypes.STRING,
        provinces: DataTypes.STRING,
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
        modelName: 'invoices_ht',
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    return invoices_ht;
};