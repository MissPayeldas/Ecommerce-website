const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    fullName: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    paymentMethod: String,
    date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
