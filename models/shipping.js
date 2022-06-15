const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shipping extends Model { }

Shipping.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        shippingName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shippingAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shippingCity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shippingState: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shippingZip: {
            type: DataTypes.INTEGER,
            validate: {
                len: [5]
            }
        },
        shippingCountry: {
            type: DataTypes.STRING,
        },
        shippingPhone: {
            type: DataTypes.STRING,
            validate: {
                len: [0, 10]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'shipping',
    }
);

module.exports = Shipping;