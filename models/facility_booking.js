'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class facility_booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.facility_booking.belongsTo(models.facilities, { foreignKey: "facility_id" })
      models.facility_booking.belongsTo(models.companies, { foreignKey: "company_id" })
      models.facility_booking.belongsTo(models.plans, { foreignKey: "plan_id" } )
    }
  };
  facility_booking.init({
    facility_id: DataTypes.INTEGER,
    booking_date: DataTypes.DATE,
    company_id: DataTypes.INTEGER,
    plan_id: DataTypes.INTEGER,
    booked_slot: DataTypes.STRING,
    number_of_attendees: DataTypes.INTEGER,
    unique_code: DataTypes.STRING,
    booking_source: DataTypes.STRING,
    notes: DataTypes.STRING,
    created_by: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'facility_booking',
    underscored: true,
    freezeTableName: true
  });
  return facility_booking;
};