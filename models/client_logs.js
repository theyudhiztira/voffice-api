'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class client_logs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    client_logs.init({
        client_id: DataTypes.INTEGER,
        field: DataTypes.STRING,
        old_value: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: null
        },
        new_value: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: null
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
        }
    }, {
        sequelize,
        modelName: 'client_logs',
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    return client_logs;
};