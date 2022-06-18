const router = require('express').Router();

const billingRoutes = require('./billingRoutes');
const cartRoutes = require('./cartRoutes');
const categoryRoutes = require('./categoryRoutes');
const orderRoutes = require('./orderRoutes');
const productRoutes = require('./productRoutes');
const shippingRoutes = require('./shippingRoutes');
const userRoutes = require('./userRoutes');

// router.use('/billingRoutes', billingRoutes);
// router.use('/cartRoutes', cartRoutes);
// router.use('/categoryRoutes', categoryRoutes);
// router.use('/orderRoutes', orderRoutes);
router.use('/productRoutes', productRoutes);
// router.use('/shippingRoutes', shippingRoutes);
router.use('/userRoutes', userRoutes);

module.exports = router;
