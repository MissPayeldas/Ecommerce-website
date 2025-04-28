const Order = require('../models/Order');
const Product = require('../models/Product');
const Address = require('../models/Address');
const User = require('../models/User');
const mongoose = require('mongoose');

// Create a new order
const createOrder = async (userId, orderDetails) => {
  try {
    const { items, shippingAddress, paymentMethod, totalAmount } = orderDetails;

    // Fetch user data
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Validate order items
    const productIds = items.map(item => item.productId);
    const products = await Product.find({ '_id': { $in: productIds } });
    if (products.length !== items.length) {
      throw new Error('Some products are not available');
    }

    // Calculate total price
    let totalPrice = 0;
    items.forEach(item => {
      const product = products.find(p => p._id.toString() === item.productId.toString());
      totalPrice += product.price * item.quantity;
    });

    // Check if total amount matches the calculated total price
    if (totalAmount !== totalPrice) {
      throw new Error('Total amount mismatch');
    }

    // Create a new order
    const order = new Order({
      user: userId,
      items: items,
      shippingAddress: shippingAddress,
      paymentMethod: paymentMethod,
      totalAmount: totalAmount,
      status: 'Pending',
      createdAt: new Date(),
    });

    // Save the order
    await order.save();

    // Return order data
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get orders for a user
const getUserOrders = async (userId) => {
  try {
    const orders = await Order.find({ user: userId }).populate('items.productId');
    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a specific order by ID
const getOrderById = async (orderId) => {
  try {
    const order = await Order.findById(orderId).populate('items.productId');
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update order status
const updateOrderStatus = async (orderId, status) => {
  try {
    const order = await Order.findById(orderId);
    if (!order) {
      throw new Error('Order not found');
    }

    order.status = status;
    await order.save();

    return order;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
};
