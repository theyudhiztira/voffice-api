'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_groups', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: Sequelize.STRING,
        created_by: Sequelize.INTEGER,
        created_at: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updated_at: {
            allowNull: true,
            defaultValue: Sequelize.NOW,
            type: Sequelize.DATE
        }
    }, {
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_groups');
  }
};