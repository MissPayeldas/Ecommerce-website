const Address = require('../models/Address');

// Add Address
const addAddress = async (req, res) => {
    const { addressLine1, addressLine2, city, state, postalCode } = req.body;
    try {
        const address = new Address({ 
            userId: req.userId, 
            addressLine1, addressLine2, city, state, postalCode 
        });
        await address.save();
        res.status(201).json(address);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addAddress };
