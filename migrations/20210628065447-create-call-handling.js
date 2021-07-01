'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('call_handling', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            company_id: Sequelize.INTEGER,
            caller_name: Sequelize.STRING,
            caller_company_name: Sequelize.STRING,
            caller_no: Sequelize.STRING,
            message: Sequelize.TEXT,
            urgency_level: Sequelize.STRING,
            forwarded_to: {
                type: Sequelize.INTEGER,
                references: {
                    model: "call_contacts",
                    key: "id"
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            },
            note: Sequelize.STRING,
            status: {
              type: Sequelize.ENUM('0', '1', '2', '3', '4'),
              allowNull: false,
              defaultValue: '0',
              comment: "0 = No Respond, 1 = Failed to client, 2 = Call forwarded, 3 = answered but not forwarded, 4 = Answered but rejected by our staff"
            },
            date_time: {
                allowNull: false,
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
        await queryInterface.dropTable('call_handling');
    }
};