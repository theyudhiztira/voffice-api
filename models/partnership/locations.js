'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class locations extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    locations.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        company_name: DataTypes.STRING,
        name: DataTypes.STRING,
        address: DataTypes.TEXT,
        layout: DataTypes.TEXT,
        country_code: DataTypes.INTEGER,
        phone: DataTypes.STRING,
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
        modelName: 'locations',
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    return locations;
};