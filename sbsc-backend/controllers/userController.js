const User = require('../models/User');

// Get User Profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).populate('address orders');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update User Profile
const updateUserProfile = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            req.userId,
            { name, email },
            { new: true }
        );
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getUserProfile, updateUserProfile };
