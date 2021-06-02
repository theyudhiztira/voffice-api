'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('call_contacts', {
            id: {
              allowNull: false,
              autoIncrement: true,
              primaryKey: true,
              type: Sequelize.INTEGER
            },
            company_id: Sequelize.INTEGER,
            plan_id: Sequelize.INTEGER,
            full_name: Sequelize.STRING,
            division: {
              allowNull: true,
              type: Sequelize.STRING,
            },
            primary_number: Sequelize.STRING,
            secondary_number: {
              allowNull: true,
              type: Sequelize.STRING,
            },
            email: {
              allowNull: true,
              type: Sequelize.STRING,
            },
            status: {
              type: Sequelize.INTEGER,
              comment: "0 = Not Active, 1 = Active"
            },
            created_by: Sequelize.INTEGER,
            created_at: {
              allowNull: false,
              type: Sequelize.DATE
            },
            updated_at: {
              allowNull: false,
              type: Sequelize.DATE
            }
        }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('call_contacts');
    }
};