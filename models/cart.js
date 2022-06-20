const { Model, DataTypes } = require('sequelize');

class Cart extends Model {}

Cart.init(
      {
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            len: [1,10]
          }
        }
      },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cart',
      }
    );
  
  module.exports = Cart;