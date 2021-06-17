"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Promo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Promo.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        type: {
            type: DataTypes.ENUM('1', '2'),
            allowNull: false,
            comment: "1 = fixed number, 2 = percentage"
        },
        status: {
            type: DataTypes.ENUM('0', '1'),
            allowNull: false,
            defaultValue: '0',
            comment: "0 = not active, 1 = active"
        },
        created_by: {
            type: DataTypes.INTEGER,
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    },
    {
      sequelize,
      modelName: "promo",
      underscored: true,
      freezeTableName: true
    }
  );
  return Promo;
};
