'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        first_name: Sequelize.STRING,
        last_name: {
            allowNull: true,
            type: Sequelize.STRING
        },
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        current_base: Sequelize.INTEGER,
        user_group: Sequelize.INTEGER,
        phone: Sequelize.STRING,
        dob: Sequelize.DATEONLY,
        status: {
            type: Sequelize.ENUM('0', '1'),
            allowNull: true,
            defaultValue: null,
            comment: "0 = non-active, 1 = active"
        },
        last_login: {
            allowNull: true,
            defaultValue: null,
            type: Sequelize.DATE
        },
        additional_permission: {
            allowNull: true,
            defaultValue: null,
            type: Sequelize.TEXT
        },
        created_by: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        created_at: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE
        }
    }, {
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};