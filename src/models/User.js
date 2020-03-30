const mongoose = require("mongoose");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    select: false,
    set: value =>
      crypto
        .createHash("md5")
        .update(value)
        .digest("hex")
  }
});

module.exports = mongoose.model("User", UserSchema);
