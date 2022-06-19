const sequelize = require('../config/connection');
const { User, Product, Category } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');
const categoryData = require('./categoryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const product of productData) {
    await Product.create({
      ...product,
    });
  }

  for (const category of categoryData) {
    await Category.create({
      ...category,
    });
  }

  process.exit(0);
};

seedDatabase();
