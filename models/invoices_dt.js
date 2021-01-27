'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class invoices_ht extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    invoices_ht.init({
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        invoice_id: Sequelize.INTEGER,
        company_plan_id: Sequelize.INTEGER,
        product_id: Sequelize.INTEGER,
        product_name: Sequelize.STRING,
        price: Sequelize.DOUBLE(15,2),
        pph_42: Sequelize.DOUBLE(15,2),
        pph_23: Sequelize.DOUBLE(15,2),
        vat: Sequelize.DOUBLE(15,2),
        is_floor: Sequelize.TINYINT,
    }, {
        sequelize,
        modelName: 'invoices_ht',
        underscored: true,
        freezeTableName: true
    });
    return invoices_ht;
};