'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('company_logs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            company_id: {
                type: Sequelize.INTEGER
            },
            field: {
                type: Sequelize.STRING
            },
            old_value: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null,
            },
            new_value: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null,
            },
            created_by: {
                type: Sequelize.INTEGER
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('company_logs');
    }
};