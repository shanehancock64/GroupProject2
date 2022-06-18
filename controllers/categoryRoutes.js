const router = require('express').Router();
const sequelize = require('../config/connection');
var category = require("../models");

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
        const categories = await Category.create(req.body);
        Category.create({
            name: req.body.name
        }).then(function(result) {
            res.send("created " + req.body.name);
        });
    } catch (err) {
        res.status(400).json(err);
    }
  });

module.exports = router;
