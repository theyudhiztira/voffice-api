'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('companies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            client_id: {
                type: Sequelize.INTEGER
            },
            company_name: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null
            },
            phone: {
                type: Sequelize.STRING
            },
            fax: {
                type: Sequelize.STRING,
                allowNull: true,
                default: null
            },
            email: {
                type: Sequelize.STRING
            },
            company_industry: {
                type: Sequelize.INTEGER
            },
            director_name: {
                type: Sequelize.STRING
            },
            director_phone: {
                type: Sequelize.STRING
            },
            director_email: {
                type: Sequelize.STRING
            },
            company_birth_date: {
                type: Sequelize.DATE,
                allowNull: true,
                default: null
            },
            tax_no: {
                type: Sequelize.STRING,
                allowNull: true,
                default: null
            },
            coregno: {
                type: Sequelize.STRING,
                allowNull: true,
                default: null
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
        await queryInterface.dropTable('companies');
    }
};