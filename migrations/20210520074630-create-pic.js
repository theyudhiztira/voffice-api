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
            full_name: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            designation: {
                type: Sequelize.STRING
            },
            source_of_discovery: {
                type: Sequelize.STRING,
            },
            id_type: {
                type: Sequelize.STRING,
                allowNull: true,
                default: null
            },
            id_no: {
                type: Sequelize.STRING,
                allowNull: true,
                default: null
            },
            created_by: {
                type: Sequelize.INTEGER,
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