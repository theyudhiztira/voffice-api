'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class business_industries extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    business_industries.init({
        name: DataTypes.STRING,
        created_by: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'business_industries',
        underscored: true,
    });
    return business_industries;
};