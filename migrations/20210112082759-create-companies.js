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
            pic_id: {
                type: Sequelize.INTEGER
            },
            location_id: {
                type: Sequelize.INTEGER
            },
            company_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null
            },
            npwp_no: {
                type: Sequelize.STRING,
                allowNull: true,
                default: null
            },
            mail_handling_whatsapp_notification: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null
            },
            call_handling_whatsapp_notification: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null
            },
            call_handling_email_notification: {
                type: Sequelize.TEXT,
                allowNull: true,
                default: null
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false,
                default: 'active',
                comment: "Value : active,suspended,terminated"
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