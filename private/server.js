const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Import body-parser
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes'); // Ensure orderRoutes exists
const User = require('./models/User');

dotenv.config(); // Make sure to use dotenv to load environment variables

const app = express(); // Initialize app before using it
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5502;
app.use(cors());

// Default route for testing
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/sbsc")
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.error("❌ MongoDB Connection Failed:", err));


// Routes
app.use("/api/users", userRoutes);
app.use('/api/orders', orderRoutes); // Ensure orderRoutes is correctly imported

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

// Address Schema and Routes
const addressSchema = new mongoose.Schema({
    fullName: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    phone: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Reference to the user
});

const Address = mongoose.model('Address', addressSchema);

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

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// Just for testing hash - Optional
const password = 'myPlainPassword';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
  if (err) throw err;
  console.log('Hashed password:', hash);
});
