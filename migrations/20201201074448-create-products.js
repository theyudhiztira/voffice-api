'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: Sequelize.STRING,
            category: Sequelize.INTEGER,
            currency: Sequelize.STRING,
            setup_fee: Sequelize.FLOAT(4),
            price: Sequelize.FLOAT(4),
            pic_id: Sequelize.INTEGER,
            occupant: Sequelize.INTEGER,
            room_capacity: Sequelize.INTEGER,
            room_size: Sequelize.INTEGER,
            view: Sequelize.ENUM('y', 'n'),
            vCredit: Sequelize.FLOAT(4),
            max_contacts: Sequelize.INTEGER,
            meeting_room: Sequelize.INTEGER,
            workstation: Sequelize.INTEGER,
            event_space: Sequelize.INTEGER,
            private_office: Sequelize.INTEGER,
            hellolive: Sequelize.INTEGER,
            livebox: Sequelize.INTEGER,
            meeting_room_cycle: Sequelize.INTEGER,
            workstation_cycle: Sequelize.INTEGER,
            event_space_cycle: Sequelize.INTEGER,
            private_office_cycle: Sequelize.INTEGER,
            hellolive_cycle: Sequelize.INTEGER,
            livebox_cycle: Sequelize.INTEGER,
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
        await queryInterface.dropTable('products');
    }
};