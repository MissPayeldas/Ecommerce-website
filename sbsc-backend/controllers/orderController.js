const Order = require('../models/Order');

// Place Order
const placeOrder = async (req, res) => {
    const { items, totalAmount } = req.body;
    try {
        const order = new Order({ userId: req.userId, items, totalAmount });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { placeOrder };

// Order Schema
const OrderSchema = new mongoose.Schema({
    fullName: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    pincode: String,
    paymentMethod: String,
    orderDate: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", OrderSchema);

// API to Handle Order Submission
app.post("/checkout", async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).send({ message: "Order placed successfully!" });
    } catch (error) {
        res.status(500).send({ message: "Error placing order", error });
    }
});

app.listen(5502, () => {
    console.log("Server running on http://localhost:5502");
});