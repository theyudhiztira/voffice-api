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
            models.locations.belongsTo(models.plans, { foreignKey: 'id' })
        }
    };
    locations.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        city: DataTypes.STRING,
        province: DataTypes.STRING,
        country: DataTypes.STRING,
        tax_id: DataTypes.STRING,
        phone: DataTypes.STRING,
        timezone: DataTypes.STRING,
        center_email: DataTypes.STRING,
        start_time: DataTypes.INTEGER,
        end_time: DataTypes.INTEGER,
        weekend_start_time: DataTypes.INTEGER,
        weekend_end_time: DataTypes.INTEGER,
        coordinates: DataTypes.STRING,
        company_name: DataTypes.STRING,
        extension: DataTypes.STRING,
        address: DataTypes.TEXT,
        status: {
            type: DataTypes.ENUM('0', '1'),
            allowNull: true,
            defaultValue: null,
            comment: "0 = non-active, 1 = active"
        },
        created_by: DataTypes.INTEGER,
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
        underscored: true,
    });
    return locations;
};