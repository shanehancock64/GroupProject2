const Billing = require('./Billing');
const Cart = require('./Cart');
const Category = require('./Category');
const Order = require('./Order');
const Product = require('./Product');
const User = require('./User')

//Billing can have many Orders
//Product can have many Carts and Orders
//User can have many Carts and Orders
//Category can have many Products

Billing.hasMany(Order, {
  foreignKey: 'billing_id',
  onDelete: 'SET NULL'
});
Order.belongsTo(Billing, {
  foreignKey: 'billing_id'
});


Product.hasMany(Cart, {
  foreignKey: 'product_id',
  onDelete: 'SET NULL'
});
Cart.belongsTo(Product, {
  foreignKey: 'product_id'
});


Product.hasMany(Order, {
  foreignKey: 'product_id',
  onDelete: 'SET NULL'
});
Order.belongsTo(Product, {
  foreignKey: 'product_id'
});


User.hasMany(Cart, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
Cart.belongsTo(User, {
  foreignKey: 'user_id'
});


User.hasMany(Order, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});
Order.belongsTo(User, {
  foreignKey: 'user_id'
});


Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL'
});
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});


module.exports = { Billing, Cart, Category, Order, Product, User };
