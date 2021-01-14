'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('locations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            province: {
                type: Sequelize.STRING
            },
            country: {
                type: Sequelize.STRING
            },
            tax_id: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            timezone: {
                type: Sequelize.STRING
            },
            center_email: {
                type: Sequelize.STRING
            },
            start_time: {
                type: Sequelize.INTEGER
            },
            end_time: {
                type: Sequelize.INTEGER
            },
            weekend_start_time: {
                type: Sequelize.INTEGER
            },
            weekend_end_time: {
                type: Sequelize.INTEGER
            },
            coordinates: {
                type: Sequelize.STRING
            },
            company_name: {
                type: Sequelize.STRING
            },
            extension: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.TEXT
            },
            status: {
                type: Sequelize.ENUM('0', '1'),
                allowNull: true,
                defaultValue: null,
                comment: "0 = non-active, 1 = active"
            },
            created_by: {
                type: Sequelize.INTEGER
            },
            created_at: {
                type: Sequelize.DATE
            },
            updated_at: {
                type: Sequelize.DATE
            }
        }, {
            updatedAt: 'updated_at',
            createdAt: 'created_at'
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('locations');
    }
};