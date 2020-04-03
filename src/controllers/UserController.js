const User = require("../models/User");

const jwt = require("../../jwt");

module.exports = {
  async index(req, res) {
    const users = await User.find();
    return res.json(users);
  },

  async signup(req, res) {
    const { email, friendcode, password } = req.body;

    let user = await User.findOne({ email: email });

    if (user) {
      // console.log(user);
      return res.json({ error: "Email already registered" });
    }

    user = await User.create({
      email,
      friendcode,
      password
    });

    const token = jwt.sign({ uid: user.id });

    return res.json({ user, token });
  }
};
