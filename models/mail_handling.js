'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mail_handling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.mail_handling.belongsTo(models.companies, { foreignKey: "company_id" } )
      models.mail_handling.belongsTo(models.locations, { foreignKey: "company_id" } )
    }
  };
  mail_handling.init({
    company_id: {
      type:  DataTypes.INTEGER,
    },
    location_id: DataTypes.INTEGER,
    received_at: DataTypes.DATE,
    item_category: DataTypes.TINYINT,
    item_description: DataTypes.STRING,
    sender_info: DataTypes.STRING,
    delivery_courier: DataTypes.STRING,
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: "0",
      comment:  "0 = received by our staff, 1 = picked up by client, 2 = forwarded to client, 3 = rejected by our staff"
    },
    proof_image: DataTypes.TEXT,
    forwarding_company: DataTypes.TINYINT,
    forwarding_cost: DataTypes.INTEGER,
    tracking_number: DataTypes.STRING,
    forwarded_at: DataTypes.DATE,
    forwarded_by: DataTypes.INTEGER,
    recipient_name: DataTypes.STRING,
    recipient_phone: DataTypes.STRING,
    recipient_address: DataTypes.TEXT,
    taken_by_client_at: DataTypes.DATE,
    notified_to: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'mail_handling',
    underscored: true,
    freezeTableName: true
  });
  return mail_handling;
};