// private/routes/orderRoutes.js

const express = require('express');
const {
  placeOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus
} = require('../controllers/orderController');

const router = express.Router();

router.post('/', placeOrder); // Add authMiddleware later if needed
router.get('/user', getUserOrders);
router.get('/:id', getOrderById);
router.put('/:id/status', updateOrderStatus);

module.exports = router;
