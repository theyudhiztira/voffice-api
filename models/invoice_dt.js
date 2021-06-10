'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class invoice_dt extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    };
    invoice_dt.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        invoice_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        company_plan_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        product_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        product_name: DataTypes.STRING,
        price: DataTypes.DOUBLE(15, 2),
        quantity: DataTypes.INTEGER,
        pph_42: {
            type: DataTypes.DOUBLE(10, 2),
            allowNull: true,
            defaultValue: '0.00',
        },
        pph_23: {
            type: DataTypes.DOUBLE(10, 2),
            allowNull: true,
            defaultValue: '0.00',
        },
        vat: {
            type: DataTypes.DOUBLE(10, 2),
            allowNull: true,
            defaultValue: '0.00',
        },
        is_floor: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        modelName: 'invoice_dt',
        underscored: true,
    });
    return invoice_dt;
};