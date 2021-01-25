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

    const picData = [
    {
        first_name: "Karl",
        last_name: "Tzy",
        email: "karltzy@gmail.com",
        phone: "08765321234",
        whatsapp: "08765321234",
        discovery_source: 1,
        created_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':'),
        updated_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
    }];

    return queryInterface.bulkInsert('pic', picData);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('pic', null, {});
  }
};
