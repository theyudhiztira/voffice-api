'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class companies extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    companies.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        client_id: {
            type: DataTypes.INTEGER
        },
        company_name: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: true,
            default: null
        },
        phone: {
            type: DataTypes.STRING
        },
        fax: {
            type: DataTypes.STRING,
            allowNull: true,
            default: null
        },
        email: {
            type: DataTypes.STRING
        },
        company_industry: {
            type: DataTypes.INTEGER
        },
        director_name: {
            type: DataTypes.STRING
        },
        director_phone: {
            type: DataTypes.STRING
        },
        director_email: {
            type: DataTypes.STRING
        },
        company_birth_date: {
            type: DataTypes.DATE,
            allowNull: true,
            default: null
        },
        tax_no: {
            type: DataTypes.STRING,
            allowNull: true,
            default: null
        },
        coregno: {
            type: DataTypes.STRING,
            allowNull: true,
            default: null
        },
        created_by: {
            type: DataTypes.INTEGER
        },
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
        modelName: 'companies',
        underscored: true,
    });
    return company;
};