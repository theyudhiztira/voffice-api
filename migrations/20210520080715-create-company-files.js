'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('company_files', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            company_id: {
                type: Sequelize.INTEGER
            },
            npwp_file: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null
            },
            akta_file: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null
            },
            perjakbi_file: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null
            },
            domicile_letter_file: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null
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
        await queryInterface.dropTable('company_files');
    }
};