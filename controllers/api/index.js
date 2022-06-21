const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderRoutes = require('./orderRoutes');
const cartRoutes = require('./cartRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/order', orderRoutes);
router.use('/cart', cartRoutes);

module.exports = router;