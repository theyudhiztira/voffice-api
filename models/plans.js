"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.plans.hasOne(models.locations, { foreignKey: 'id', sourceKey: 'location_id' })
      models.plans.hasOne(models.products, { foreignKey: 'id', sourceKey: 'product_id' })
      models.plans.hasMany(models.facility_booking, { foreignKey: "plan_id" })
    }
  }
  Plans.init(
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        company_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
        current_price: DataTypes.DOUBLE,
        renewal_price: DataTypes.INTEGER,
        location_id: DataTypes.INTEGER,
        start_date: {
            allowNull: true,
            type: DataTypes.DATEONLY
        },
        last_renew_date: {
            allowNull: true,
            type: DataTypes.DATEONLY
        },
        next_renew_date: {
            allowNull: true,
            type: DataTypes.DATEONLY
        },
        contract_term: DataTypes.INTEGER,
        billing_cycle: DataTypes.INTEGER,
        extend_period: DataTypes.INTEGER,
        assigned_phone_no: DataTypes.STRING,
        assigned_fax_no: DataTypes.STRING,
        domicile_number: DataTypes.STRING,
        status: {
            type: DataTypes.INTEGER,
            comment: "0 = Unpaid, 1 = Notified Paid. 2 = Checked & Paid, 3 = Activated, 4 = Expired, 5 = Activation Pending, 6 = Cancelled"
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
      modelName: "plans",
      underscored: true,
      freezeTableName: true
    }
  );
  return Plans;
};
