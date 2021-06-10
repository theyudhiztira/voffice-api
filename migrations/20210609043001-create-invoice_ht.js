'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('invoice_ht', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        company_id: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        amount_due: {
            allowNull: false,
            type: Sequelize.DOUBLE
        },
        promo_id: Sequelize.INTEGER,
        discount: Sequelize.INTEGER,
        date_generated: {
            allowNull: false,
            type: Sequelize.DATEONLY
        },
        date_due: {
            allowNull: false,
            type: Sequelize.DATEONLY
        },
        date_paid: Sequelize.DATEONLY,
        paid_references: Sequelize.TEXT,
        paid_references_notes: Sequelize.TEXT,
        amount_paid: Sequelize.FLOAT,
        payment_proof: Sequelize.TEXT,
        proforma_invoice_pdf: Sequelize.TEXT,
        status: {
            type: Sequelize.INTEGER,
            allowNull: false,
            default: 0,
            comment: "0 = unpaid, 1 = paid, 2 = void, 3 = cancelled, 4 = expired, 5 = payment accepted, 6 = payment declined, 7 = payment on hold"
        },
        activaion_status: {
            type: Sequelize.INTEGER,
            allowNull: true,
            default: 0,
            comment: "0 = pending, 1 = activated, 3 = renewal invoice"
        },
        additional_description: Sequelize.TEXT,
        period_from: Sequelize.DATEONLY,
        period_to: Sequelize.DATEONLY,
        show_period: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        pph_42: {
            type: Sequelize.ENUM('y', 'n'),
            allowNull: true,
            defaultValue: 'n',
        },
        pph_23: {
            type: Sequelize.ENUM('y', 'n'),
            allowNull: true,
            defaultValue: 'n',
        },
        vat: {
            type: Sequelize.ENUM('y', 'n'),
            allowNull: true,
            defaultValue: 'y',
        },
        recurring: {
            type: Sequelize.ENUM('y', 'n'),
            allowNull: true,
            defaultValue: 'n',
        },
        vat_rounding: {
            type: Sequelize.ENUM('y', 'n'),
            allowNull: false,
            defaultValue: 'n',
        },
        created_by: Sequelize.INTEGER,
        accept_by: Sequelize.INTEGER,
        decline_by: Sequelize.INTEGER,
        created_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updated_at: {
            allowNull: true,
            defaultValue: Sequelize.NOW,
            type: Sequelize.DATE
        }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('invoice_ht');
  }
};
