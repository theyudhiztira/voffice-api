'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    // PIC
    await queryInterface.bulkInsert('pic', [{
      id: 1,
      full_name: 'Kevin Ramadhan',
      phone: '087757764878',
      email: 'sakti.voffice@gmail.com',
      designation: 'Director',
      source_of_discovery: '1',
      created_by: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    }])

    // Company
    await queryInterface.bulkInsert('companies', [{
      id: 1,
      pic_id: 1,
      company_name: 'PT vdev Indonesia',
      phone: '085155001616',
      email: 'devteam@voffice.co.id',
      status: 'active',
      created_by: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    }])

    // Company Files
    await queryInterface.bulkInsert('company_files', [{
      id: 1,
      company_id: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    }])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
