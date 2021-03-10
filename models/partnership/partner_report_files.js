'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class partner_report_files extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.partner_report_files.hasOne(models.users, {foreignKey: 'id', targetKey: 'created_by'});
        }
    };
    partner_report_files.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        location_id: DataTypes.INTEGER,
        file: DataTypes.STRING,
        periode: DataTypes.STRING,
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
        modelName: 'partner_report_files',
        freezeTableName: true,
        underscored: true,
    });
    return partner_report_files;
};