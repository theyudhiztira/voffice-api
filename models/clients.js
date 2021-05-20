"use strict";
const {Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.clients.hasMany(models.client_business_needs, {
        foreignKey: "client_id",
      });

      models.clients.hasMany(models.companies, {
        foreignKey: "client_id",
      });
    }
  }
  Clients.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      whatsapp: {
        type: DataTypes.STRING,
        allowNull: true,
        default: null,
      },
      discovery_source: {
        type: DataTypes.INTEGER,
        allowNull: true,
        default: null,
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        default: 0,
      },
      web_register: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        default: 0,
      },
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        default: null,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "clients",
      underscored: true,
    }
  );
  return Clients;
};
