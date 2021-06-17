'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facility_schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.facility_schedules.belongsTo(models.facilities, { foreignKey: "facility_id" })
    }
  };
  facility_schedules.init({
    facility_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    700: DataTypes.INTEGER,
    800: DataTypes.INTEGER,
    900: DataTypes.INTEGER,
    1000: DataTypes.INTEGER,
    1100: DataTypes.INTEGER,
    1200: DataTypes.INTEGER,
    1300: DataTypes.INTEGER,
    1400: DataTypes.INTEGER,
    1500: DataTypes.INTEGER,
    1600: DataTypes.INTEGER,
    1700: DataTypes.INTEGER,
    1800: DataTypes.INTEGER,
    1900: DataTypes.INTEGER,
    2000: DataTypes.INTEGER,
    2100: DataTypes.INTEGER,
    2200: DataTypes.INTEGER,
    2300: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'facility_schedules',
    underscored: true,
  });
  return facility_schedules;
};