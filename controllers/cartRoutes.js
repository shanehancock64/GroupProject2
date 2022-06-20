const router = require('express').Router();
const { Cart, User, Product } = require('../models');
const withAuth = require('../utils/auth');

// show cart by user id
router.get("/cart", withAuth, async (req, res) => {
    try {
        const getData = await Cart.findAll({
            where: {
                user_id: req.body.user.id
            },
            include: [
                {
                    model: Product,
                    attributes: ['name', 'price', 'description', 'size']
                },

            ]
        })
        res.json(getData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// add new item to cart
router.post("/cart/:itemId", withAuth, async (req, res) => {
    try {
        const postData = await Cart.create(req.body)

        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;