const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Billing extends Model {}

Billing.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        billingName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        billingAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        billingCity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        billingState: {
            type: DataTypes.STRING,
            allowNull: false
        },
        billingZip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        billingCountry: {
            type: DataTypes.STRING,
        },
        billingPhone: {
            type: DataTypes.STRING,
            validate: {
                len: [0,10]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'billing',
    }
);      

module.exports = Billing;