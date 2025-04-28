
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, '../logs/server.log');

const logger = (message) => {
  const logEntry = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFile(logFile, logEntry, (err) => {
    if (err) console.error('Logging failed:', err);
  });
};

module.exports = logger;
