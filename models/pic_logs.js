'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class pic_logs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    pic_logs.init({
        pic_id: DataTypes.INTEGER,
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
        modelName: 'pic_logs',
        underscored: true,
    });
    return pic_logs;
};