'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('facilities', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            location_id: Sequelize.INTEGER,
            facility_name: Sequelize.STRING,
            facility_category: Sequelize.INTEGER,
            maximum_capacity: Sequelize.INTEGER,
            images: Sequelize.TEXT,
            real_time_booking: Sequelize.BOOLEAN,
            credit_cost: Sequelize.INTEGER,
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
        await queryInterface.dropTable('facilities');
    }
};