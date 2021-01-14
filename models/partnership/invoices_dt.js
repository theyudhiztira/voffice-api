'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class invoices_dt extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.invoices_dt.belongsTo(models.products, {
                foreignKey: "product_id"
            });

            models.invoices_dt.belongsTo(models.invoices_ht, {
                foreignKey: "invoice_id",
                as: "dt_data",
            })
        }
    };
    invoices_dt.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        invoice_id: DataTypes.INTEGER,
        client_plan_id: DataTypes.INTEGER,
        product_id: DataTypes.INTEGER,
        product_name: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        quantity: DataTypes.INTEGER,
        pph_42: DataTypes.DOUBLE,
        pph_23: DataTypes.DOUBLE,
        vat: DataTypes.DOUBLE,
        is_floor: DataTypes.TINYINT,
    }, {
        sequelize,
        modelName: 'invoices_dt',
        freezeTableName: true,
        timestamps: false
    });
    return invoices_dt;
};