const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const validateRequiredFields = (data, fields) => {
    return fields.every(field => data.hasOwnProperty(field) && data[field]);
  };
  
  module.exports = {
    validateEmail,
    validateRequiredFields,
  };
  