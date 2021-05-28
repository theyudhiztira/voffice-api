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
        location_id: Datatypes.INTEGER,
        product_name: Datatypes.STRING,
        category: Datatypes.INTEGER,
        price: Datatypes.FLOAT(4),
        credit: Datatypes.INTEGER,
        serviced_office_id: Datatypes.INTEGER,
        status: Datatypes.INTEGER,
        approved_by: {
            allowNull: true,
            type: Datatypes.INTEGER
        },
        approved_at: {
            allowNull: true,
            type: Datatypes.DATE
        },
        created_by: Datatypes.INTEGER,
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