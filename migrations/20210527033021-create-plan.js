'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('plan', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            company_id: Sequelize.INTEGER,
            location_id: Sequelize.INTEGER,
            credit: Sequelize.INTEGER,
            start_date: {
              allowNull: false,
              type: Sequelize.DATE
            },
            last_renew_date: {
              allowNull: false,
              type: Sequelize.DATE
            },
            next_renew_date: {
              allowNull: false,
              type: Sequelize.DATE
            },
            contract_term: Sequelize.INTEGER,
            billing_cycle: Sequelize.INTEGER,
            extend_period: Sequelize.INTEGER,
            assigned_phone_no: Sequelize.STRING,
            assigned_fax_no: Sequelize.STRING,
            domicile_number: Sequelize.INTEGER,
            status: {
              type: Sequelize.INTEGER,
              comment: "0 = Unpaid, 1 = Notified Paid. 2 = Checked & Paid, 3 = Activated, 4 = Expired, 5 = Activation Pending, 6 = Cancelled"
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
        await queryInterface.dropTable('plan');
    }
};