'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('facility_schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      facility_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'facility_booking',
          key: 'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      700: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      800: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      900: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      1000: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      1100: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      1200: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      1300: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      1400: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      1500: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      1600: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      1700: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      1800: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      1900: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      2000: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      2100: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      2200: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      2300: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    }, {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('facility_schedules');
  }
};