'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    products.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        category: DataTypes.INTEGER,
        currency: DataTypes.STRING,
        setup_fee: DataTypes.FLOAT(4),
        price: DataTypes.FLOAT(4),
        pic_id: DataTypes.INTEGER,
        occupant: DataTypes.INTEGER,
        room_capacity: DataTypes.INTEGER,
        room_size: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        view: {
            type: DataTypes.ENUM('y', 'n', null),
            defaultValue: null,
            allowNull: true
        },
        vCredit: {
            type: DataTypes.FLOAT(4),
            defaultValue: 0.00
        },
        max_contacts: DataTypes.INTEGER,
        meeting_room: DataTypes.INTEGER,
        workstation: DataTypes.INTEGER,
        event_space: DataTypes.INTEGER,
        private_office: DataTypes.INTEGER,
        hellolive: DataTypes.INTEGER,
        livebox: DataTypes.INTEGER,
        meeting_room_cycle: DataTypes.INTEGER,
        workstation_cycle: DataTypes.INTEGER,
        event_space_cycle: DataTypes.INTEGER,
        private_office_cycle: DataTypes.INTEGER,
        hellolive_cycle: DataTypes.INTEGER,
        livebox_cycle: DataTypes.INTEGER,
        created_by: DataTypes.INTEGER,
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'products',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return products;
};