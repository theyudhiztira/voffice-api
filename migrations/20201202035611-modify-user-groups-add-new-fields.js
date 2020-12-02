'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn(
        'user_groups',
        'updated_by',
        {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('user_groups', 'updated_by');
  }
};

