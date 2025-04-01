const User = require('../models/userModel');

const getUserDetails = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

const updateUserProfile = async (userId, updateData) => {
  const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

module.exports = {
  getUserDetails,
  updateUserProfile,
};
