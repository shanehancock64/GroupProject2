const User = require('./User');
const Product = require('./Product');
const Cart = require('./cart')

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

module.exports = { User, Product, Cart };