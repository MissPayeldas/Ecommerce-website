const express = require('express');
const router = express.Router();
const { getProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// Get all products
router.get('/', getProducts);

// Get product by ID
router.get('/:id', getProductById);

// Add a new product (Admin only)
router.post('/', addProduct);

// Update an existing product (Admin only)
router.put('/:id', updateProduct);

// Delete a product (Admin only)
router.delete('/:id', deleteProduct);

module.exports = router;
