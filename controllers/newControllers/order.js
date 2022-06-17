const order = require('../models/order.js');
var express = require('express');
var router = express.Router();

// Show all orders
router.get('/orders', function (req, res) {
  router.order(req.params.order);
  
})
