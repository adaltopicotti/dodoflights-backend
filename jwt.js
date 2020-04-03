const jwt = require('jsonwebtoken');

const secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

// Date start: 1970
// Each day is exactly 86400 seconds
module.exports = {
  sign (payload) {
    return jwt.sign(payload, secret, { expiresIn: 86400 * 7})
  },
  
  verify (token) {
    return jwt.verify(token, secret);
  }
}