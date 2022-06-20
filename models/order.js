const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
    {
		id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        orderId: {
      	    type: DataTypes.INTEGER
        },
        quantity: {
      	    type: DataTypes.INTEGER
        },
        purchasePrice: {
   		    type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        ccLast4: {
            type: DataTypes.INTEGER,
        }
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