const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Test Route
router.get("/test-db", async (req, res) => {
    try {
        const collections = await mongoose.connection.db.listCollections().toArray();
        res.json({ message: "Database Connected", collections });
    } catch (error) {
        res.status(500).json({ error: "Database Connection Failed" });
    }
});

module.exports = router;
