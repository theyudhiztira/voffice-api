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
            models.products.belongsTo(models.invoices_dt, {
                foreignKey: "product_id"
            })
        }
    };
    products.init({
        product_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        product_name: DataTypes.STRING,
        product_category: DataTypes.INTEGER,
        currency: DataTypes.STRING,
        billing_cycle: DataTypes.TINYINT,
        setup_fee: DataTypes.FLOAT,
        price: DataTypes.FLOAT,
        location_id: DataTypes.INTEGER,
        serviced_office_id: DataTypes.INTEGER,
        facility_id: DataTypes.INTEGER,
        status: DataTypes.INTEGER,
        max_contacts: DataTypes.INTEGER,
        credit: DataTypes.INTEGER,
        meeting_room_quota: DataTypes.INTEGER,
        workstation_quota: DataTypes.INTEGER,
        event_space_quota: DataTypes.INTEGER,
        private_office_quota: DataTypes.INTEGER,
        welcome_mail_path: DataTypes.TEXT,
        meeting_room_reload: DataTypes.ENUM(['y', 'n']),
        workstation_reload: DataTypes.ENUM(['y', 'n']),
        event_space_reload: DataTypes.ENUM(['y', 'n']),
        private_office_reload: DataTypes.ENUM(['y', 'n']),
        meeting_room_reload_cycle: DataTypes.INTEGER,
        workstation_reload_cycle: DataTypes.INTEGER,
        event_space_reload_cycle: DataTypes.INTEGER,
        private_office_reload_cycle: DataTypes.INTEGER,
        security_deposit: DataTypes.INTEGER,
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 25
        },
        approved_by: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 25
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        },
        approved_at: {
            allowNull: true,
            type: DataTypes.DATE
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'products',
        underscored: true,
    });
    return products;
};