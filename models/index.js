const User = require('./user');
const Product = require('./product');
const Cart = require('./cart');
const Order = require('./order');
const Shipping = require('./shipping');
const Billing = require('./billing');

//User can have many products and carts
//Product can have many carts

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});

Product.hasMany(Cart, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE'
});

Cart.belongsTo(Product, {
  foreignKey: 'product_id'
});

User.hasMany(Cart, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Cart.belongsTo(User, {
  foreignKey: 'user_id'
});

Order.belongsTo(Product);

Order.belongsTo(User);

Order.belongsTo(Billing, {
    foreignKey: {
        allowNull: false,
        targetKey: 'orderId'
    }
});

Order.belongsTo(Shipping, {
  foreignKey: {
      allowNull: false,
      targetKey: 'orderId'
  }
});

Shipping.hasMany(Order);

Billing.hasMany(Order);

module.exports = { User, Product, Cart, Order, Shipping, Billing };