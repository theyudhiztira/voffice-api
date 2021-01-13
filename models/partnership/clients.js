'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class clients extends Model {
        static associate(models){
            models.clients.belongsTo(models.client_plan, {foreignKey: 'client_id'});
        }
    }

    clients.init({
        client_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        leads_id: DataTypes.INTEGER,
        password: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        full_name: DataTypes.STRING,
        company_name: DataTypes.STRING,
        company_industry: DataTypes.TINYINT,
        company_reg_no: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        whatsapp: DataTypes.STRING,
        address: DataTypes.TEXT,
        business_needs: DataTypes.TEXT,
        additional_info: DataTypes.TEXT,
        discovery_source: DataTypes.TINYINT,
        contact_method: DataTypes.TINYINT,
        location_id: DataTypes.INTEGER,
        status: DataTypes.TINYINT,
        call_handling_notes: DataTypes.TEXT,
        mail_handling_notes: DataTypes.TEXT,
        visitor_handling_notes: DataTypes.TEXT,
        owner: DataTypes.INTEGER,
        community_id: DataTypes.INTEGER,
        agent_id: DataTypes.INTEGER,
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 25
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
        modelName: 'clients',
        underscored: true,
    });

    return clients;
};