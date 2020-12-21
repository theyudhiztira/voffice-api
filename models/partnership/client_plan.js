'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class client_plan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.clients.hasOne(models.clients, {foreignKey: 'client_id'});
        }
    };
    client_plan.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        client_id: DataTypes.INTEGER,
        members: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
        current_price: DataTypes.DOUBLE,
        renewal_price: DataTypes.DOUBLE,
        promo_id: DataTypes.INTEGER,
        discount: DataTypes.INTEGER,
        location_id: DataTypes.INTEGER,
        start_date: DataTypes.DATE,
        last_renew_date: DataTypes.DATE,
        next_renew_date: DataTypes.DATE,
        assigned_phone_no: DataTypes.STRING,
        assigned_fax_no: DataTypes.STRING,
        contract_term: DataTypes.INTEGER,
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
        modelName: 'client_plan',
        freezeTableName: true,
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    return client_plan;
};