'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('facilities_category', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: Sequelize.STRING,
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
        await queryInterface.dropTable('facilities_category');
    }
};