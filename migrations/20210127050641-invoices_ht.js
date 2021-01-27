'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('invoices_ht', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        location_id: Sequelize.INTEGER,
        company_id: Sequelize.INTEGER,
        promo_id: Sequelize.INTEGER,
        amount_due: Sequelize.DOUBLE(15,2),
        discount: {
          type: Sequelize.DOUBLE(15,2),
          allowNull: true
        },
        date_generated: Sequelize.DATE,
        date_due: Sequelize.DATE,
        date_paid: Sequelize.DATE,
        paid_reference: Sequelize.TEXT,
        amount_paid: Sequelize.DATE,
        payment_proof: Sequelize.TEXT,
        paid_reference_note: Sequelize.TEXT,
        status: {
          type: Sequelize.TINYINT,
          comment: "0 = unpaid, 1 = paid, 2 = void, 3 = cancelled, 4 = expired, 5 = payment accepted, 6 = payment declined, 7 = payment on hold",
          defaultValue: 0,
        },
        activation_status: {
          type: Sequelize.TINYINT,
          comment: "0 = pending, 1 = activated, 3 = renewal invoice",
          defaultValue: 0,
        },
        additional_description: Sequelize.TEXT,
        period_from: Sequelize.DATE,
        period_to: Sequelize.DATE,
        show_period: Sequelize.TINYINT,
        created_by: Sequelize.INTEGER,
        action_paid_by: Sequelize.INTEGER,
        created_at: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updated_at: {
          allowNull: true,
          defaultValue: Sequelize.NOW,
          type: Sequelize.DATE
        },
        pph_42: {
          type: Sequelize.ENUM('n', 'y'),
          defaultValue: 'n',
        },
        pph_23: {
          type: Sequelize.ENUM('n', 'y'),
          defaultValue: 'n',
        },
        vat: {
          type: Sequelize.ENUM('n', 'y'),
          defaultValue: 'y',
        },
        recurring: Sequelize.CHAR,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('invoices_ht');
  }
};
