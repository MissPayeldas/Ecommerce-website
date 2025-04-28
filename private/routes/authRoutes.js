const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const { placeOrder } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

router.post("/", protect, placeOrder);

module.exports = router;
