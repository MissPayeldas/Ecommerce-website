const Order = require('../models/orderModel');

const createOrder = async (userId, orderData) => {
  const newOrder = new Order({
    userId,
    ...orderData
  });
  await newOrder.save();
  return newOrder;
};

const getOrders = async (userId) => {
  return await Order.find({ userId });
};

module.exports = {
  createOrder,
  getOrders,
};
