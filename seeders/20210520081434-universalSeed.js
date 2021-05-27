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

    // Products
    await queryInterface.bulkInsert('products', [{
      id: 1,
      product_name: "Virtual Office Silver (Bundle) 12 Month(s)",
      category: 5,
      price: 5000000,
      credit: 2000,
      serviced_office_id: null,
      status: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    }])

    // Facilities
    await queryInterface.bulkInsert('facilities', [{
      id: 1,
      location_id: 1,
      facility_name: "Meeting Room 1",
      facility_category: 1,
      maximum_capacity: 10,
      images: "test.jpg",
      real_time_booking: 1,
      created_by: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    }])

    // Facilities Category
    await queryInterface.bulkInsert('facilities_category', [{
      id: 1,
      name: "Meeting Room",
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
