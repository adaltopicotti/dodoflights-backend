const jwt = require('jsonwebtoken');

const secret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

module.exports = {
  sign (payload) {
    return jwt.sign(payload, secret, { expiresIn: 840000 })
  },
  
  verify (token) {
    return jwt.verify(token, secret);
  }
}