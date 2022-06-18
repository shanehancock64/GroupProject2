const router = require('express').Router();
const { Product } = require('../models');
const withAuth = require('../utils/auth');

// find all products

router.get('/', async (req, res) => {
  try {
      const getData = await Product.findAll({})
      res.json(getData)
  } catch (err) {
      res.status(500).json(err);
  }
});

// Product by id

// router.get('/:id', async (req, res) => {
//   try {
//       const getData = await product.findOne({
//           where: {
//               id: req.params.id
//           },
//           include: [
//               {
//                   model: product,
//                   attributes: ['name', 'description', 'price', 'size'],
//               }
            
//           ]
//       })
//       if (!getData) {
//           res.status(404).json({ message: 'No product found with this id' });
//           return;
//       }
//       res.json(getData);
//   } catch (err) {
//       res.status(500).json(err);
//   }
// });

// // Post product

// router.post('/', async (req, res) => {
//   try {
//       const postData = await product.create(req.body);
//       Product.create({
//         productName: req.body.productName
//       }).then(function() {
//         res.redirect('/products');
//       }).catch(function(err) {
//           console.log(err.message);
//           response.send(err);
//       });
//   } catch (err) {
//       res.status(400).json(err);
//   }
// });




module.exports = router;