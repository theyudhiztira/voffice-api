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

    const productData = [
    {
        name: "Virtual Office Gold",
        category: 5,
        currency: "IDR",
        setup_fee: 0,
        price: 9000000,
        pic_id: 36,
        occupant: 3,
        room_capacity: 5,
        room_size: 4,
        view: "n",
        vCredit: 0,
        max_contacts: 0,
        meeting_room: 10,
        workstation: 12,
        event_space: 6,
        private_office: 8,
        hellolive: 2,
        livebox: 0,
        meeting_room_cycle: 12,
        workstation_cycle: 12,
        event_space_cycle: 12,
        private_office_cycle: 12,
        hellolive_cycle: 12,
        livebox_cycle: 12,
        created_by: 1,
        created_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':'),
        updated_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
    }];

    return queryInterface.bulkInsert('products', productData);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('products', null, {});
  }
};
