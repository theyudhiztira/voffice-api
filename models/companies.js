"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.companies.belongsTo(models.pic, {
        foreignKey: "pic_id",
      });

      models.companies.hasMany(models.facility_booking, { foreignKey: "company_id"})
      models.companies.hasMany(models.plans, { foreignKey: "company_id" })
      models.companies.hasMany(models.mail_handling, { foreignKey: "company_id" })
    }
  }
  companies.init(
    {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      pic_id: {
          type: DataTypes.INTEGER
      },
      company_name: {
          type: DataTypes.STRING,
          allowNull: false
      },
      phone: {
          type: DataTypes.STRING
      },
      email: {
          type: DataTypes.STRING,
          allowNull: false
      },
      address: {
          type: DataTypes.TEXT,
          allowNull: true,
          default: null
      },
      npwp_no: {
          type: DataTypes.STRING,
          allowNull: true,
          default: null
      },
      mail_handling_whatsapp_notification: {
          type: DataTypes.TEXT,
          allowNull: true,
          default: null
      },
      call_handling_whatsapp_notification: {
          type: DataTypes.TEXT,
          allowNull: true,
          default: null
      },
      call_handling_email_notification: {
          type: DataTypes.TEXT,
          allowNull: true,
          default: null
      },
      status: {
          type: DataTypes.STRING,
          allowNull: false,
          default: 'active',
          comment: "Value : active,suspended,terminated"
      },
      created_by: {
          type: DataTypes.INTEGER
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
      modelName: "companies",
      underscored: true,
    }
  );
  return companies;
};
