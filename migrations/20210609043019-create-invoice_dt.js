'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('invoice_dt', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        invoice_id: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        company_plan_id: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        product_id: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        product_name: Sequelize.STRING,
        price: Sequelize.DOUBLE(15, 2),
        quantity: Sequelize.INTEGER,
        pph_42: {
            type: Sequelize.DOUBLE(10, 2),
            allowNull: true,
            defaultValue: '0.00',
        },
        pph_23: {
            type: Sequelize.DOUBLE(10, 2),
            allowNull: true,
            defaultValue: '0.00',
        },
        vat: {
            type: Sequelize.DOUBLE(10, 2),
            allowNull: true,
            defaultValue: '0.00',
        },
        is_floor: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: null,
        }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
