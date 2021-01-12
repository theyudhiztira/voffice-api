'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class invoices_ht extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.invoices_ht.hasMany(models.invoices_dt, {foreignKey: 'invoice_id'});
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
        client_id: DataTypes.INTEGER,
        client_plan_id: DataTypes.INTEGER,
        promo_id: DataTypes.INTEGER,
        currency: DataTypes.STRING,
        amount_due: DataTypes.DOUBLE,
        discount: DataTypes.INTEGER,
        date_generated: DataTypes.DATE,
        date_due: DataTypes.DATE,
        date_paid: DataTypes.DATE,
        paid_reference: DataTypes.TEXT,
        amount_paid: DataTypes.FLOAT,
        payment_proof: DataTypes.TEXT,
        paid_references_notes: DataTypes.TEXT,
        proforma_invoice_pdf: DataTypes.STRING,
        status: DataTypes.TINYINT,
        activation_status: DataTypes.TINYINT,
        additional_description: DataTypes.TEXT,
        period_from: DataTypes.DATE,
        period_to: DataTypes.DATE,
        show_period: DataTypes.TINYINT,
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 25
        },
        accepted_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 25
        },
        declined_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 25
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        pph_42: DataTypes.ENUM(['y', 'n']),
        pph_23: DataTypes.ENUM(['y', 'n']),
        vat: DataTypes.ENUM(['y', 'n']),
        recurring: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'invoices_ht',
        underscored: true,,
        freezeTableName: true
    });

    // hasMany(db.invoices_dt, {foreignKey: 'invoice_id'})
    return invoices_ht;
};