const router = require('express').Router();
const { Product, Cart } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/cart', withAuth, async (req, res) => {
    try{
        const cartData = await Cart.findAll({
            model: Cart,
            where: {
                UserId: request.user.id
            },
            include: [db.Product]
        })
        const cart = cartData.render('cart', {cartItems, user: request.user});
    } catch (err) {
        res.status(500).json(err);
    }       
});

router.post('/cart/:itemId', withAuth, async (req, res) => {
    try {
        const cartData = await Cart.create({
            UserId: request.user.id,
            ProductId: request.params.itemId,
            quantity: request.body.quantity,
        })
        response.redirect('/products');
    } catch (err) {
        res.status(500).json(err);
    }    
});

router.put('/cart/:itemId', withAuth, async (req, res) => {
    try {
        const cartData = await Cart.update({quantity: request.body.quantity}, {
            where: {
                UserId: request.user.id,
                ProductId: request.params.itemId
            }, 
            include: [Product]    
        });
        response.redirect('/cart');
    } catch (err) {
        res.status(500).json(err);
    }    
})

router.delete('/cart/:itemId', withAuth, async (req, res) => {
    try {
      const cartData = await Cart.destroy({
        where: {
            UserId: request.user.id,
            id: request.params.itemId,
        },
      });
  
      if (!cartData) {
        res.status(404).json({ message: 'No cart found!' });
        return;
      }
  
      res.status(200).json(cartData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;