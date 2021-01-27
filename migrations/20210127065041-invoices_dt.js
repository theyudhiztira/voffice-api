'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('invoices_dt', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        invoice_id: Sequelize.INTEGER,
        company_plan_id: Sequelize.INTEGER,
        product_id: Sequelize.INTEGER,
        product_name: Sequelize.STRING,
        price: Sequelize.DOUBLE(15,2),
        pph_42: Sequelize.DOUBLE(15,2),
        pph_23: Sequelize.DOUBLE(15,2),
        vat: Sequelize.DOUBLE(15,2),
        is_floor: Sequelize.TINYINT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('invoices_dt');
  }
};
