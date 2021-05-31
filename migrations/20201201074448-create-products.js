'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            location_id: Sequelize.INTEGER,
            product_name: Sequelize.STRING,
            category: Sequelize.INTEGER,
            price: Sequelize.FLOAT(4),
            credit: Sequelize.INTEGER,
            serviced_office_id: Sequelize.INTEGER,
            status: Sequelize.INTEGER,
            approved_by: {
                allowNull: true,
                type: Sequelize.INTEGER
            },
            approved_at: {
                allowNull: true,
                type: Sequelize.DATE
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
        await queryInterface.dropTable('products');
    }
};