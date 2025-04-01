const Address = require('../models/addressModel');

const addAddress = async (userId, addressData) => {
  const newAddress = new Address({
    userId,
    ...addressData
  });
  await newAddress.save();
  return newAddress;
};

const getAddresses = async (userId) => {
  return await Address.find({ userId });
};

module.exports = {
  addAddress,
  getAddresses,
};
