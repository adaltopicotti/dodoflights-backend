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
      console.log(user);
      return res.json({ error: "Email already registered" });
    }

    user = await User.create({
      email,
      friendcode,
      password
    });

    const token = jwt.sign({ user: user.id });

    return res.json({ user, token });
  },

  async login(req, res) {
    const [hashType, hash] = req.headers.authorization.split(" ");
    const [email, password] = Buffer.from(hash, "base64")
      .toString()
      .split(":");

    // console.log(credentials);
    // const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ user: user.id });

    return res.json({ user, token });
  },

  async authMiddleware(req, res, next) {
    const [, token] = req.headers.authorization.split(" ");
    try {
      const payload = jwt.verify(token);
      console.log(payload);
      const user = await User.findById(payload.user);

      if (!user) {
        return res.status(401).json({ error: "Token inválido" });
      }

      req.auth = user;

      next();
    } catch (error) {
      res.send(401, error);
    }
  }
};
