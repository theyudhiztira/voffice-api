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

        const data = [
        {
            first_name: "Administrator",
            last_name: null,
            email: 'devteam@voffice.co.id',
            password: '$2a$10$QpyNfK9JMZlm0nEB4f4dbuq/O82.n.QU.yN2b63AUo0hWCH7REXEa',
            current_base: 89,
            user_group: 1,
            phone: '085155001616',
            dob: '2020-02-18',
            status: 1,
            additional_permission: null,
            created_by: 1,
            created_at: '2020-01-02 20:12:11',
            updated_at: '2020-01-11 20:11:11'
        }];

        return queryInterface.bulkInsert('users', data);
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
