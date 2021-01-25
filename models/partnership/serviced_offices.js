'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class serviced_offices extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.serviced_offices.hasOne(models.pic_plan, {foreignKey: 'id', sourceKey: 'pic_plan_id'});
        }
    };
    serviced_offices.init({
        room_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        pic_id: DataTypes.INTEGER,
        pic_plan_id: DataTypes.INTEGER,
        occupant: DataTypes.STRING,
        room_name: DataTypes.STRING,
        lease_price: DataTypes.FLOAT,
        offer_price: DataTypes.FLOAT,
        actual_price: DataTypes.FLOAT,
        location_id: DataTypes.INTEGER,
        room_capacity: DataTypes.INTEGER,
        view: DataTypes.STRING,
        room_size: DataTypes.DECIMAL,
        status: DataTypes.TINYINT,
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 25
        },
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
        modelName: 'serviced_offices',
        underscored: true,
    });
    return serviced_offices;
};