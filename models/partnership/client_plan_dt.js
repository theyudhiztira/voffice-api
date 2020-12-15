'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class client_plan_dt extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    client_plan_dt.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        client_id: DataTypes.INTEGER,
        client_plan_id: DataTypes.INTEGER,
        meeting_room_quota: DataTypes.INTEGER,
        workstation_quota: DataTypes.INTEGER,
        event_space_quota: DataTypes.INTEGER,
        private_office_quota: DataTypes.INTEGER,
        status: DataTypes.TINYINT,
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
        modelName: 'client_plan_dt',
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    return client_plan_dt;
};