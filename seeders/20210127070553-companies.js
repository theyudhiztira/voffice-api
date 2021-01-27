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
            pic_id: 1,
            company_name: "PT. Kacang Peanuts",
            address: `<p>Gedung Centennial Tower Lt. 29 Unit D Dan E</p><p>
                        Jl. Jend Gatot Subroto Kav. 24 -25 Rt. 002 Rw. 002 </p><p>
                        Karet Semanggi, Setiabudi</p><p>
                        Jakarta Selatan DKI Jakarta</p>`,
            phone: "0876543211",
            fax: "90.4252.42-44",
            email: "kacangpeanuts@gmail.com",
            company_industry: 1,
            director_name: "Kacang Director",
            director_phone: "0876655553",
            director_email: "kacangdirector@gmail.com",
            tax_no: "456327826",
            coregno: "45632782642",
            created_by: 1,
            created_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':'),
            updated_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
        }];

        return queryInterface.bulkInsert('companies', data);
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
