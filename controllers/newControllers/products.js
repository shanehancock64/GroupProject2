const product = require('../models/product.js');
var express = require('express');
var router = express.Router();

// Get all products
router.get('/', function (req, res) {
  res.redirect('/products');
});

router.get('/products', function (req, res) {
  product.findAll({})
  res.render('products');
});

router.get('/products/:id', function (req, res) {
product.findOne({id: req.params.id});
});

// Create a new product
router.post('/products', function (req, res) {
  product.create({
    productName: req.body.productName
    }).then(function() {
      res.redirect('/products');
    }).catch(function(err) {
        console.log(err.message);
        response.send(err);
    });
  });
  