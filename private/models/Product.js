const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    enum: ['Redmi', 'Realme', 'Oppo'],
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.0,
  },
  reviews: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
