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
    },
    {
      id: 2,
      product_name: "Basic Support Membership II (Bundle) 12 Month(s)",
      category: 3,
      price: 5500000,
      credit: 0,
      serviced_office_id: null,
      status: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    }])

    // Plan
    await queryInterface.bulkInsert('plans', [{
        id: 1,
        company_id: 1,
        product_id: 1,
        current_price: 10500000,
        location_id: 1,
        start_date: '2021-02-18 00:00:00',
        next_renew_date: '2022-02-18 00:00:00',
        contract_term: 12,
        billing_cycle: 12,
        extend_period: 2,
        assigned_phone_no: '085811733128',
        domicile_number: '034 / RET - CM / CT / I / 2020',
        status: 0,
        created_by: 1,
        created_at: '2021-02-15 00:00:00',
        updated_at: '2021-02-15 00:00:00'
    },
    {
        id: 2,
        company_id: 1,
        product_id: 2,
        current_price: 10500000,
        location_id: 1,
        start_date: '2021-02-18 00:00:00',
        next_renew_date: '2022-02-18 00:00:00',
        contract_term: 12,
        billing_cycle: 12,
        extend_period: 2,
        status: 0,
        created_by: 1,
        created_at: '2021-02-15 00:00:00',
        updated_at: '2021-02-15 00:00:00'
    }])

    // Plan DT
    await queryInterface.bulkInsert('plan_dt', [{
      id: 1,
      plan_id: 1,
      free_credit: 2000,
      paid_credit: 0,
      updated_by: 1,
      created_at: '2021-02-15 00:00:00',
      updated_at: '2021-02-15 00:00:00'
    },
    {
      id: 2,
      plan_id: 2,
      free_credit: 0,
      paid_credit: 0,
      updated_by: 1,
      created_at: '2021-02-15 00:00:00',
      updated_at: '2021-02-15 00:00:00'
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

    // Call Contacts
    await queryInterface.bulkInsert('call_contacts', [{
      
      id: 1,
      company_id: 1,
      plan_id: 1,
      full_name: "Kevin Ramadhan",
      division: null,
      primary_number: "087757764878",
      secondary_number: null,
      email: 'sakti.voffice@gmail.com',
      status: 1,
      created_by: 1,
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
