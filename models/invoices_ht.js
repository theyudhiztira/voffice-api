'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class invoices_ht extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    invoices_ht.init({
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        location_id: DataTypes.INTEGER,
        company_id: DataTypes.INTEGER,
        promo_id: DataTypes.INTEGER,
        amount_due: DataTypes.DOUBLE,
        discount: DataTypes.DOUBLE,
        date_generated: DataTypes.DATE,
        date_due: DataTypes.DATE,
        date_paid: DataTypes.DATE,
        paid_reference: DataTypes.TEXT,
        amount_paid: DataTypes.DATE,
        payment_proof: DataTypes.TEXT,
        paid_reference_note: DataTypes.TEXT,
        status: DataTypes.TINYINT,
        activation_status: DataTypes.TINYINT,
        additional_description: DataTypes.TEXT,
        period_from: DataTypes.DATE,
        period_to: DataTypes.DATE,
        show_period: DataTypes.TINYINT,
        created_by: DataTypes.INTEGER,
        action_paid_by: DataTypes.INTEGER,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
        pph_42: DataTypes.ENUM('n', 'y'),
        pph_23: DataTypes.ENUM('n', 'y'),
        vat: DataTypes.ENUM('n', 'y'),
        recurring: DataTypes.CHAR,

    }, {
        sequelize,
        modelName: 'invoices_ht',
        underscored: true,
        freezeTableName: true
    });
    return invoices_ht;
};