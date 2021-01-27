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
          location_id: 1,
          company_id: 1,
          promo_id: 0,
          amount_due: 9000000,
          discount: 0,
          date_generated: "2021-01-27",
          date_due: "2021-01-28",
          created_by: 1,
          created_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':'),
          updated_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
        }];

        return queryInterface.bulkInsert('invoices_ht', data);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('invoices_ht', null, {});
  }
};
