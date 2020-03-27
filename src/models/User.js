const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  friendcode: String,
});

module.exports = mongoose.model('User', UserSchema);