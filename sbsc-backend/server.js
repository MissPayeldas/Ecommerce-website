require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser'); // Import body-parser
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRoutes = require("./routes/userRoutes");
const User = require("./models/User");

const app = express(); // Initialize app before using it
const PORT = process.env.PORT || 5502;
app.use(express.json());
app.use(cors());


// Middleware
app.use(cors());
app.use(bodyParser.json());



// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/sbsc", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.error("❌ MongoDB Connection Failed:", err));


// Define a simple schema and model for your items
const itemSchema = new mongoose.Schema({
    name: String,
    link: String
});

const Item = mongoose.model('Item', itemSchema);

// Search endpoint
app.get('/search', async (req, res) => {
    const query = req.query.query;
    try {
        const results = await Item.find({ name: { $regex: query, $options: 'i' } }); // Case-insensitive search
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});




// Routes
app.use("/api/users", userRoutes);

// SignUp Route
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).send("User Registered");
    } catch (error) {
        res.status(500).send("Error registering user");
    }
});

// Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.status(404).send("User not found");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid credentials");

        const token = jwt.sign({ userId: user._id }, "secretKey", { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        res.status(500).send("Error logging in");
    }
});

// Get User Profile Route
app.get("/profile", async (req, res) => {
    try {
        const token = req.headers["authorization"];
        if (!token) return res.status(401).send("Access Denied");

        const decoded = jwt.verify(token, "secretKey");
        const user = await User.findById(decoded.userId);
        if (!user) return res.status(404).send("User not found");

        res.json({ name: user.name, email: user.email, address: user.address });
    } catch (error) {
        res.status(400).send("Invalid Token");
    }
});

// Define a simple schema for Address
const addressSchema = new mongoose.Schema({
    fullName: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    phone: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to the user
  });
  
  // Create a model for Address
  const Address = mongoose.model('Address', addressSchema);
  
  // POST endpoint to add a new address
  app.post('/add-address', async (req, res) => {
    try {
      const { fullName, address, city, state, pincode, phone } = req.body;
      const token = req.headers["authorization"];
      
      if (!token) return res.status(401).send("Access Denied");
  
      const decoded = jwt.verify(token, "secretKey");
      const userId = decoded.userId; // Extract the userId from the token
  
      const newAddress = new Address({
        fullName,
        address,
        city,
        state,
        pincode,
        phone,
        userId
      });
  
      await newAddress.save();
      res.status(200).json({ message: 'Address added successfully' });
    } catch (error) {
      console.error('Error adding address:', error);
      res.status(500).json({ message: 'Failed to add address' });
    }
  });
  
  // GET endpoint to fetch all addresses for the current user
  app.get('/addresses', async (req, res) => {
    try {
      const token = req.headers["authorization"];
      
      if (!token) return res.status(401).send("Access Denied");
  
      const decoded = jwt.verify(token, "secretKey");
      const userId = decoded.userId; // Extract the userId from the token
  
      const addresses = await Address.find({ userId: userId });
  
      res.status(200).json(addresses);
    } catch (error) {
      console.error('Error fetching addresses:', error);
      res.status(500).json({ message: 'Failed to fetch addresses' });
    }
  });
  