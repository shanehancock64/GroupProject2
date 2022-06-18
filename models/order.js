const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model { }

Order.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        orderId: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        },
        purchasePrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        ccLast4: {
            type: DataTypes.INTEGER,
        },
        billing_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'billing',
                key: 'id',
            },
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'order',
    }
);

module.exports = Order;