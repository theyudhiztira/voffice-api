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

        const locationData = [
        {
            name: "Centennial Tower, Jakarta Selatan",
            city: "Jakarta Selatan",
            province: "DKI Jakarta",
            country: "ID",
            tax_id: "03.215.088.0-063.001",
            phone: "02129222999",
            timezone: "Asia/Jakarta",
            center_email: "cs@voffice.co.id",
            start_time: 800,
            end_time: 1700,
            weekend_start_time:0,
            weekend_end_time:0,
            coordinates: "-6.230162, 106.820870",
            company_name: "PT Voffice",
            extension: "123",
            address: `<p>Gedung Centennial Tower Lt. 29 Unit D Dan E</p><p>
                        Jl. Jend Gatot Subroto Kav. 24 -25 Rt. 002 Rw. 002 </p><p>
                        Karet Semanggi, Setiabudi</p><p>
                        Jakarta Selatan DKI Jakarta</p>`,
            status: 1,
            created_by: 1,
            created_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':'),
            updated_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
        }];

        return queryInterface.bulkInsert('locations', locationData);
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
