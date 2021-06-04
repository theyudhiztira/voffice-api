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
            models.products.belongsTo(models.plans, { foreignKey: 'id' })
        }
    };
    products.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        location_id: DataTypes.INTEGER,
        product_name: DataTypes.STRING,
        category: DataTypes.INTEGER,
        price: DataTypes.FLOAT(4),
        credit: DataTypes.INTEGER,
        serviced_office_id: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
        approved_by: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        approved_at: {
            allowNull: true,
            type: DataTypes.DATE
        },
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