const express = require('express');
const { addAddress } = require('../controllers/addressController');
const jwtMiddleware = require('../utils/jwtMiddleware');

const router = express.Router();

router.post('/address', jwtMiddleware, addAddress);

module.exports = router;


// Get user's addresses
app.get("/addresses", async (req, res) => {
    try {
      const token = req.headers["authorization"];
      if (!token) return res.status(401).send("Access Denied");
  
      const decoded = jwt.verify(token, "secretKey");
      const user = await User.findById(decoded.userId);
      if (!user) return res.status(404).send("User not found");
  
      res.json(user.addresses); // Return the list of addresses
    } catch (error) {
      res.status(500).send("Error fetching addresses");
    }
  });
  