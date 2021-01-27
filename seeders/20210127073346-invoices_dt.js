'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
        const date = new Date();

        const data = [
        {
          invoice_id: 1,
          product_id: 1,
          product_name: 'Virtual Office Gold',
          price: 9000000
        }];

        return queryInterface.bulkInsert('invoices_dt', data);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('invoices_dt', null, {});
  }
};
