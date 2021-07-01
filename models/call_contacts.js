"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CallContacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.call_contacts.hasMany(models.call_handling, { foreignKey: "forwarded_to" })
    }
  }
  CallContacts.init(
    {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      company_id: DataTypes.INTEGER,
      plan_id: DataTypes.INTEGER,
      full_name: DataTypes.STRING,
      division: {
          allowNull: true,
          type: DataTypes.STRING,
      },
      primary_number: DataTypes.STRING,
      secondary_number: {
          allowNull: true,
          type: DataTypes.STRING,
      },
      email: {
          allowNull: true,
          type: DataTypes.STRING,
      },
      status: {
      type: DataTypes.INTEGER,
          comment: "0 = Not Active, 1 = Active"
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
      modelName: "call_contacts",
      underscored: true,
      freezeTableName: true
    }
  );
  return CallContacts;
};
