'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('facility_booking', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      facility_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      booking_date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "companies",
          key: 'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      plan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "plans",
          key: 'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      booked_slot: {
        type: Sequelize.STRING
      },
      number_of_attendees: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      unique_code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      booking_source: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Value: vox, web_portal, mobile_app"
      },
      notes: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    },  {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('facility_booking');
  }
};