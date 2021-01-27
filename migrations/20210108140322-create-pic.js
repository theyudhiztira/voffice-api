'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('pic', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            first_name: {
                type: Sequelize.STRING
            },
            last_name: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            whatsapp: {
                type: Sequelize.STRING,
                allowNull: true,
                defaultValue: null
            },
            discovery_source: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: null
            },
            status: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: 0,
                comment: "0 = warm leads, 1 = cold leads, 3 = hot leads, 4 = failed leads, 5 = active, 6 = cancelled, 7 = terminated"
            },
            web_register: {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: 0
            },
            created_by: {
                type: Sequelize.INTEGER,
                allowNull: true,
                defaultValue: null
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('pic');
    }
};