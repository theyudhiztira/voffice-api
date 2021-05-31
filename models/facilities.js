"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Facilities extends Model {
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
  Facilities.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        location_id: DataTypes.INTEGER,
        facility_name: DataTypes.STRING,
        facility_category: DataTypes.INTEGER,
        maximum_capacity: DataTypes.INTEGER,
        images: DataTypes.TEXT,
        real_time_booking: DataTypes.BOOLEAN,
        credit_cost: DataTypes.INTEGER,
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
      modelName: "facilities",
      underscored: true,
      freezeTableName: true
    }
  );
  return Facilities;
};