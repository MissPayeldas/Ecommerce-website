const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const register = async (userData) => {
  // Encrypt password
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const newUser = new User({
    name: userData.name,
    email: userData.email,
    password: hashedPassword,
  });

  await newUser.save();
  return newUser;
};

const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !await bcrypt.compare(password, user.password)) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token };
};

module.exports = {
  register,
  login,
};
