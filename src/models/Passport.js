const mongoose = require('mongoose');

const PassportSchema = new mongoose.Schema({
  username: String,
  friendcode: String,
  island: String,
  fruit: String,
  hemisphere: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Passport', PassportSchema);