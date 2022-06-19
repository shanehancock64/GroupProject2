const router = require('express').Router();
const sequelize = require('../config/connection');
const { Category, Product } = require("../models");

// GET categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll({})
        res.json(categories)
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/products/category/:categoryName', async (req, res) => {
    try {
        const categories = await sequelize.Promise.all([
            Product.findAll({
                where: {
                    CategoryID: req.body.categoryId
                }
            }),
            Category.findAll({})
        ]).spread(function(products, categories){
            res.render('products', {products, categories, user: req.user});
          });
      } catch (err) {
          res.status(400).json(err);
    }
});

router.post('/category', async (req, res) => {
    try {
        const categories = await Category.create({
            name: req.body.name
        }).then(function(result) {
            res.json(categories);
        });
    } catch (err) {
        res.status(400).json(err);
    }
  });

module.exports = router;
