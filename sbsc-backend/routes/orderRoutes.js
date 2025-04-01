const express = require('express');
const { placeOrder } = require('../controllers/orderController');
const jwtMiddleware = require('../utils/jwtMiddleware');

const router = express.Router();

router.post('/order', jwtMiddleware, placeOrder);

module.exports = router;
