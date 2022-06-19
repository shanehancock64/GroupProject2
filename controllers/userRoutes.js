const router = require('express').Router();
const { User, Cart, Order } = require('../models');

// GET /api/users
router.get('/', async (req, res) => {
    try {
         const getData = await User.findAll({
             attributes: { exclude: ['password'] },
        })
        res.json(getData)
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET /api/users/1
router.get('/:id', async (req, res) => {
    try {
        const getData = await User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Cart,
                    attributes: ['id', 'quantity']
                },
                {
                    model: Order,
                    attributes: ['orderId', 'quantity', 'purchasePrice', 'ccLast4']
                }
            ]
        })
        if (!getData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(getData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST /api/users
router.post('/', async (req, res) => {
    try {
        const postData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = postData.id;
            req.session.logged_in = true;

            res.status(200).json(postData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const postData = await User.findOne({ where: { email: req.body.email } });

        if (!postData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await postData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = postData.id;
            req.session.logged_in = true;

            res.json({ user: postData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

// LOGOUT
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    }
    else {
        res.status(404).end();
    }
});

module.exports = router;