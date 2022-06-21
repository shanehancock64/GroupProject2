const router = require('express').Router();
const { Product, Order, Billing, Shipping } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/orders', withAuth, async (req, res) => {
    try {
        const orderData = await Order.fineOne({
          include:[  
            {
            model: Order,
            attributes: ['orderID', [sequelize.fn('sum', sequelize.col('Order.purchasePrice')), 'orderTotal'],[sequelize.fn('date_format', sequelize.col('Order.createdAt'), '%m-%d-%y'), 'formattedDate'], [sequelize.fn('count', sequelize.col('Order.quantity')), 'itemCount']],
            group: ['Order.orderId','formattedDate'],
            where: {
                UserId: request.user.id
            }}]    
        });
    const orders = orderData.map((order) =>
    Order.get({ plain: true })
    );
    res.render('order', {
      orders,
    });
    }catch (err) {
        res.status(500).json(err);
    }    
});

router.get('/orders/:id', withAuth, async (req, res) => {
    try {
        const orderData = await Order.findAll({
            model: Order,
            where: {
                id: req.user.id,
                orderID: req.params.id
            },
            include: [ Product, Shipping, Billing ]
        });
        const orders = orderData.render('past-order', {orderItems: orderItems, user: req.user});
    }catch (err) {
        res.status(500).json(err);
    }    
});

router.post('/order/', withAuth, async (req, res) => {
    const newOrder = await Order.create({
        where: {
            id: req.user.id,
            orderID: req.params.id
        },
    });
    res.status(200).json(newOrder);
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const orderData = await Order.destroy({
        where: {
            id: req.user.id,
            orderID: req.params.id
        },
      });
  
      if (!orderData) {
        res.status(404).json({ message: 'No order found!' });
        return;
      }
  
      res.status(200).json(orderData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;