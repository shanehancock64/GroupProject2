const router = require('express').Router();

const authRoutes = require('./auth');
const passportRoutes = require('./passport')

router.use('/', authRoutes);
router.use('/', passportRoutes);

module.exports = router;