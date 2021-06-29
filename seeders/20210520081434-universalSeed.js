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
      location_id: 1,
      product_name: "Virtual Office Silver (Bundle) 12 Month(s)",
      category: 5,
      price: 3000000,
      credit: 2000,
      serviced_office_id: null,
      status: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    },
    {
      id: 2,
      location_id: 1,
      product_name: "Basic Support Membership II (Bundle) 12 Month(s)",
      category: 3,
      price: 3500000,
      credit: 0,
      serviced_office_id: null,
      status: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    },{
      id: 3,
      location_id: 1,
      product_name: "Virtual Office Gold (Bundle) 12 Month(s)",
      category: 5,
      price: 4000000,
      credit: 3500,
      serviced_office_id: null,
      status: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    },
    {
      id: 4,
      location_id: 1,
      product_name: "Advance Support Membership (Bundle) 12 Month(s)",
      category: 3,
      price: 4910000,
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
        start_date: '2021-02-18',
        next_renew_date: '2022-02-18',
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
        start_date: '2021-02-18',
        next_renew_date: '2022-02-18',
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

    // Invoice_ht
    await queryInterface.bulkInsert('invoice_ht', [{
      
      id: 1,
      company_id: 1,
      amount_due: 5000000.00,
      promo_id: null,
      discount: null,
      date_generated: '2021-02-18 00:00:00',
      date_due: '2021-02-18 00:00:00',
      date_paid: '2021-02-18 00:00:00',
      paid_references: null,
      paid_references_notes: null,
      amount_paid: null,
      payment_proof: null,
      proforma_invoice_pdf: null,
      status: 0,
      activation_status: 0,
      additional_description: null,
      period_from: '2021-02-18 00:00:00',
      period_to: '2021-02-18 00:00:00',
      show_period: 0,
      created_by: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    }])

    // Invoice_dt
    // await queryInterface.bulkInsert('invoice_dt', [{
    //   id: 1,
    //   invoice_id: 1,
    //   company_plan_id: 1,
    //   product_id: 1,
    //   product_name: 'Virtual Office Silver Promo (Bundle) 12 Month',
    //   price: 5000000,
    //   quantity: 1,
    // }])

    // Promo
    await queryInterface.bulkInsert('promo', [{
      id: 1,
      name: 'Diskon Rp 500.000',
      price: 500000,
      type: '1',
      status: '1',
      created_by: 1,
      created_at: '2021-02-18 00:00:00',
      updated_at: '2021-02-18 00:00:00'
    }])

    // facility_booking
    await queryInterface.bulkInsert('facility_booking', [{
      id: 1,
      facility_id: 1,
      booking_date: "2021-05-27",
      company_id: 1,
      plan_id: 1,
      booked_slot: "1000,1100,1300",
      number_of_attendees: 5,
      unique_code: "d222be9d5b5867bef0544573c5452c59",
      booking_source: "vox",
      notes: "Kursinya dibalik",
      created_by: 1,
      created_at: "2020-02-06",
      updated_at: "2020-02-06"
    }])

    // facility_schedules
    await queryInterface.bulkInsert('facility_schedules', [{
      id: 1,
      facility_id: 1,
      date: "2021-05-27",
      700: null,
      800: null,
      900: 95,
      1000: 95,
      1100: null,
      1200: null,
      1300: null,
      1400: null,
      1500: null,
      1600: null,
      1700: null,
      1800: null,
      1900: null,
      2000: null,
      2100: null,
      2200: null,
      2300: null,
      created_at: "2020-02-06",
      updated_at: "2020-02-06"
    }])

    await queryInterface.bulkInsert("mail_handling", [{
      id: 1,
      company_id: 1,
      location_id: 1,
      received_at: "2020-02-05 00:00:00",
      item_category: 1,
      item_description: "a description",
      sender_info: "Galang IT vOffice",
      delivery_courier: "Kuda",
      created_at: "2020-02-06",
      updated_at: "2020-02-06"
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
