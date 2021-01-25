'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('pic_logs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            pic_id: Sequelize.INTEGER,
            field: Sequelize.STRING,
            old_value: {
                type: Sequelize.TEXT,
                allowNull: true,
                defaultValue: null
            },
            new_value: {
                type: Sequelize.TEXT,
                allowNull: true,
                defaultValue: null
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
        await queryInterface.dropTable('pic_logs');
    }
};