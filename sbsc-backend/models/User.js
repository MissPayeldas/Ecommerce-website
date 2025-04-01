const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
});

module.exports = mongoose.model('User', userSchema);

// Address Schema
const addressSchema = new mongoose.Schema({
  fullName: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  phone: String,
});


const User = mongoose.model('User', userSchema);

module.exports = User;
