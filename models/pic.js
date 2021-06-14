"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.pic.hasMany(models.companies, {
        foreignKey: "pic_id",
      });
    }
  }
  Pic.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        full_name: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        designation: {
            type: DataTypes.STRING
        },
        source_of_discovery: {
            type: DataTypes.STRING,
        },
        id_type: {
            type: DataTypes.STRING,
            allowNull: true,
            default: null
        },
        id_no: {
            type: DataTypes.STRING,
            allowNull: true,
            default: null
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
      modelName: "pic",
      underscored: true,
      freezeTableName: true
    }
  );
  return Pic;
};
