const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shipping extends Model {}

Shipping.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
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
                len: [0,10]
            }
    },
        orderId: {
            type: DataTypes.INTEGER
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