'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class pic_business_needs extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.pic_business_needs.belongsTo(models.pic, {
                foreignKey: "pic_id",
                as: "business_needs",
            })
        }
    };
    pic_business_needs.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        pic_id: {
            type: DataTypes.INTEGER
        },
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
        modelName: 'pic_business_needs',
        underscored: true,
    });
    return pic_business_needs;
};