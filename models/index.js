const User = require('./User');
const Product = require('./Product');
const Cart = require('./cart')

User.hasMany(Product, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(User, {
  foreignKey: 'user_id'
});

Cart.belongsTo(
  models.Product
);

Cart.belongsTo(User, {
  foreignKey: {
    allowNull: false
  }
});

module.exports = { User, Product, Cart };