// config/db.js

const mongoose = require('mongoose');

// MongoDB URI (replace with your own connection string or use environment variables)
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sbsc'; // Example local MongoDB URI

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit the application if the connection fails
    }
};

module.exports = connectDB;
