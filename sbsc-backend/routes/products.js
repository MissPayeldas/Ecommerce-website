const express = require('express');
const router = express.Router();

// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 200 },
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;