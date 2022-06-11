const sequelize = require('../config/connection');
const { User, Product } = require('../models');

const userData = require('./userData.json');
const productData = require('./productData.json');

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

  process.exit(0);
};

seedDatabase();
