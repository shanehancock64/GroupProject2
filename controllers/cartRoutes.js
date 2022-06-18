const router = require('express').Router();
const { Cart, User, Product } = require('../models');
const withAuth = require('../utils/auth');

//Show cart by User ID
router.get('/', withAuth, async (req, res) => {
    try {
        const getData = await Cart.findAll({
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Product,
                },
            ]
        })
        res.json(getData)
    } catch (err) {
        res.status(500).json(err);
    }
});

//Add item to cart
router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Cart.create({
            user_id: req.session.user_id,
            product_id: req.session.product_id,
            quantity: req.body.quantity,
        })
        res.json(postData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;