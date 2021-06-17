'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('promo', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: Sequelize.STRING,
            price: Sequelize.INTEGER,
            type: {
              type: Sequelize.ENUM('1', '2'),
              allowNull: false,
              comment: "1 = fixed number, 2 = percentage"
            },
            status: {
              type: Sequelize.ENUM('0', '1'),
              allowNull: false,
              defaultValue: '0',
              comment: "0 = not active, 1 = active"
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
        await queryInterface.dropTable('promo');
    }
};