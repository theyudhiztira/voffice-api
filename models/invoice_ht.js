'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class invoice_ht extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    };
    invoice_ht.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        company_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        amount_due: {
            allowNull: false,
            type: DataTypes.DOUBLE(15,2)
        },
        promo_id: DataTypes.INTEGER,
        discount: DataTypes.INTEGER,
        date_generated: {
            allowNull: false,
            type: DataTypes.DATEONLY
        },
        date_due: {
            allowNull: false,
            type: DataTypes.DATEONLY
        },
        date_paid: DataTypes.DATEONLY,
        paid_references: DataTypes.TEXT,
        paid_references_notes: DataTypes.TEXT,
        amount_paid: DataTypes.FLOAT,
        payment_proof: DataTypes.TEXT,
        proforma_invoice_pdf: DataTypes.TEXT,
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: 0,
            comment: "0 = unpaid, 1 = paid, 2 = void, 3 = cancelled, 4 = expired, 5 = payment accepted, 6 = payment declined, 7 = payment on hold"
        },
        activation_status: {
            type: DataTypes.INTEGER,
            allowNull: true,
            default: 0,
            comment: "0 = pending, 1 = activated, 3 = renewal invoice"
        },
        additional_description: DataTypes.TEXT,
        period_from: DataTypes.DATEONLY,
        period_to: DataTypes.DATEONLY,
        show_period: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        pph_42: {
            type: DataTypes.ENUM('y', 'n'),
            allowNull: true,
            defaultValue: 'n',
        },
        pph_23: {
            type: DataTypes.ENUM('y', 'n'),
            allowNull: true,
            defaultValue: 'n',
        },
        vat: {
            type: DataTypes.ENUM('y', 'n'),
            allowNull: true,
            defaultValue: 'y',
        },
        recurring: {
            type: DataTypes.ENUM('y', 'n'),
            allowNull: true,
            defaultValue: 'n',
        },
        vat_rounding: {
            type: DataTypes.ENUM('y', 'n'),
            allowNull: false,
            defaultValue: 'n',
        },
        created_by: DataTypes.INTEGER,
        accept_by: DataTypes.INTEGER,
        decline_by: DataTypes.INTEGER,
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updated_at: {
            allowNull: true,
            defaultValue: DataTypes.NOW,
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'invoice_ht',
        underscored: true,
    });
    return invoice_ht;
};