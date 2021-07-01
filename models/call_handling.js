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
      models.call_handling.belongsTo(models.call_contacts,  { foreignKey: "forwarded_to" })
      models.call_handling.belongsTo(models.users,  { foreignKey: "created_by" })
      models.call_handling.belongsTo(models.companies,  { foreignKey: "company_id" })
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
        company_id: DataTypes.INTEGER,
        caller_name: DataTypes.STRING,
        caller_company_name: DataTypes.STRING,
        caller_no: DataTypes.STRING,
        message: DataTypes.TEXT,
        urgency_level: DataTypes.STRING,
        forwarded_to: DataTypes.INTEGER,
        note: DataTypes.TEXT,
        status: {
            type: DataTypes.ENUM('0', '1', '2', '3', '4'),
            allowNull: false,
            defaultValue: '0',
            comment: "0 = No Respond, 1 = Failed to client, 2 = Call forwarded, 3 = answered but not forwarded, 4 = Answered but rejected by our staff"
        },
        date_time: {
            allowNull: false,
            type: DataTypes.DATE
        },
        created_by: DataTypes.INTEGER,
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
      modelName: "call_handling",
      underscored: true,
      freezeTableName: true
    }
  );
  return Promo;
};
