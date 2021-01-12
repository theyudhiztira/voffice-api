'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user_groups extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    };
    user_groups.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        created_by: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        updated_by: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        created_at: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'user_groups',
        underscored: true,
    });
  return user_groups;
};