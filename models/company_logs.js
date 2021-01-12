'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class company_logs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    company_logs.init({
        company_id: DataTypes.INTEGER,
        field: DataTypes.STRING,
        old_value: {
            type: DataTypes.TEXT,
            allowNull: true,
            default: null,
        },
        new_value: {
            type: DataTypes.TEXT,
            allowNull: true,
            default: null,
        },
        created_by: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'company_logs',
        underscored: true,
    });
    return company_logs;
};