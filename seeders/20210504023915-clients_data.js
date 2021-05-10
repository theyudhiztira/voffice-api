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

    const clientData = [
      {
        client_id: 1212544,
        company_name: 'Yayasan Kasih Yang Terakhir',
        address: 'Menara Kuningan, Jakarta Selatan',
        phone: '(021) 23032 12',
        fax: '(021) 23032 12',
        email: 'yayasankasih@mail.co.id',
        company_industry: 123,
        director_name: 'Winda Majenda Winowatan',
        director_phone: '+62 81340747464',
        director_email: 'winda@mail.com',
        company_birth_date: '2010-05-03',
        tax_no: '11111111',
        coregno: '',
        created_by: 5,
        created_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':'),
        updated_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
      }
    ]
    console.log(clientData);

    return queryInterface.bulkInsert('companies', clientData)

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('companies', null, {});
  }
};
