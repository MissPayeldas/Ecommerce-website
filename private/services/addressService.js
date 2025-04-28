const Address = require('../models/Address');

const createAddress = async (userId, addressData) => {
  const address = new Address({
    ...addressData,
    user: userId,
  });

  await address.save();
  return address;
};

const getUserAddresses = async (userId) => {
  return await Address.find({ user: userId });
};

const updateAddress = async (addressId, updateData) => {
  return await Address.findByIdAndUpdate(addressId, updateData, { new: true });
};

const deleteAddress = async (addressId) => {
  return await Address.findByIdAndDelete(addressId);
};

module.exports = {
  createAddress,
  getUserAddresses,
  updateAddress,
  deleteAddress,
};
