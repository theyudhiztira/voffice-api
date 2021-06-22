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
      models.plan_dt.belongsTo(models.plans, { foreignKey: 'plan_id' })
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
        plan_id: DataTypes.INTEGER,
        free_credit: DataTypes.INTEGER,
        paid_credit: DataTypes.INTEGER,
        updated_by: {
            allowNull: true,
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
      modelName: "plan_dt",
      underscored: true,
      freezeTableName: true
    }
  );
  return Plans;
};
