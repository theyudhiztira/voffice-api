'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('plan_dt', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            plan_id: Sequelize.INTEGER,
            free_credit: Sequelize.INTEGER,
            paid_credit: Sequelize.INTEGER,
            updated_by: {
                allowNull: true,
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
        }, {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('plan_dt');
    }
};