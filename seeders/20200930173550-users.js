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

        const userData = [
        {
            first_name: "Administrator",
            last_name: null,
            email: 'devteam@voffice.co.id',
            password: '$2a$10$QpyNfK9JMZlm0nEB4f4dbuq/O82.n.QU.yN2b63AUo0hWCH7REXEa',
            current_base: 89,
            user_group: 1,
            phone: '085155001616',
            dob: '2020-02-18',
            status: '1',
            additional_permission: null,
            created_by: 1,
            created_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':'),
            updated_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
        }];

        const userPermission = [{
            user_id: 1,
            invoicing: '1:1:1',
            client: '1:1:1',
            call_handling: '1:1:1',
            mail_handling: '1:1:1',
            visitor_handling: '1:1:1',
            booking: '1:1:1',
            product: '1:1:1',
            location: '1:1:1',
            serviced_office: '1:1:1',
            deals: '1:1:1',
            promo: '1:1:1',
            created_by: 1,
            created_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':'),
            updated_at: [date.getFullYear(), date.getMonth()+1, date.getDate()].join('-')+' '+[date.getHours(),date.getMinutes(),date.getSeconds()].join(':')
        }]

        await queryInterface.bulkInsert('user_acl', userPermission);

        return queryInterface.bulkInsert('users', userData);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        await queryInterface.bulkDelete('users', null, {});
        return queryInterface.bulkDelete('user_acl', null, {});
    }
};
