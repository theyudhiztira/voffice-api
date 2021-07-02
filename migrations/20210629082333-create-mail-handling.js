'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mail_handling', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'companies',
          key: 'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      location_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locations',
          key: 'id'
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      received_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      item_category: {
        type: Sequelize.TINYINT,
        allowNull: false,
      },  
      item_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sender_info: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      delivery_courier: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: "0",
        comment:  "0 = received by our staff, 1 = picked up by client, 2 = forwarded to client, 3 = rejected by our staff"
      },
      proof_image: {
        type: Sequelize.TEXT
      },
      forwarding_company: {
        type: Sequelize.STRING
      },
      forwarding_cost: {
        type: Sequelize.INTEGER
      },
      tracking_number: {
        type: Sequelize.STRING(150)
      },
      forwarded_at: {
        type: Sequelize.DATE
      },
      forwarded_by: {
        type: Sequelize.INTEGER
      },
      recipient_name: {
        type: Sequelize.STRING(50)
      },
      recipient_phone: {
        type: Sequelize.STRING(25)
      },
      recipient_address: {
        type: Sequelize.TEXT
      },
      taken_by_client_at: {
        type: Sequelize.DATE
      },
      notified_to: {
        type: Sequelize.TEXT
      },
      created_by: {
        allowNull: false,
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
    },{
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mail_handling');
  }
};