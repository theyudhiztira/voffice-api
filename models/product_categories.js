'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class product_categories extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    product_categories.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: DataTypes.STRING,
        created_by: DataTypes.INTEGER,
        created_at: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updated_at: {
            allowNull: false,
            type: Sequelize.DATE
        }
    }, {
        sequelize,
        modelName: 'product_categories',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return product_categories;
};