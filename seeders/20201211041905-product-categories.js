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

    const productCategoriesData = [
    {
        id: 5,
        name: "Virtual Office",
        created_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':'),
        updated_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
    },
    {
        id: 3,
        name: "Membership",
        created_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':'),
        updated_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
    }];

    return queryInterface.bulkInsert('product_categories', productCategoriesData);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('product_categories', null, {});
  }
};
