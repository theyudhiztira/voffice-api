'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

        await queryInterface.createTable('user_acl',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                user_id: Sequelize.INTEGER,
                invoicing: Sequelize.STRING,
                client: Sequelize.STRING,
                call_handling: Sequelize.STRING,
                mail_handling: Sequelize.STRING,
                visitor_handling: Sequelize.STRING,
                booking: Sequelize.STRING,
                product: Sequelize.STRING,
                location: Sequelize.STRING,
                serviced_office: Sequelize.STRING,
                deals: Sequelize.STRING,
                promo: Sequelize.STRING,
                created_by: {
                    allowNull: false,
                    type: Sequelize.INTEGER
                },
                created_at: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updated_at: {
                    allowNull: true,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.NOW
                }
            }, {
                updatedAt: 'updated_at',
                createdAt: 'created_at'
            }
        )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

     await queryInterface.dropTable('user_acl')
  }
};
