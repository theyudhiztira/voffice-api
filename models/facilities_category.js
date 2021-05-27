"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FacilitiesCategory extends Model {
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
  FacilitiesCategory.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
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
      modelName: "facilities_category",
      underscored: true,
      freezeTableName: true
    }
  );
  return FacilitiesCategory;
};
