'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class client_business_needs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    client_business_needs.init({
        product_category_id: {
            type: DataTypes.INTEGER
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
        }
    }, {
        sequelize,
        modelName: 'client_business_needs',
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    });
    return client_business_needs;
};