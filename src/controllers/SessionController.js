const User = require("../models/User");

const jwt = require("../../jwt");

module.exports = {
  async create(req, res) {
    const [hashType, hash] = req.headers.authorization.split(" ");
    const [email, password] = Buffer.from(hash, "base64")
      .toString()
      .split(":");
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ uid: user.id });

    return res.json({ token });
  },

  async authMiddleware(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(401).json({ error: "not authorized" });
    }
    console.log(req.headers.authorization);
    const token = req.headers.authorization.replace("Bearer ", "");
    try {
      const payload = jwt.verify(token);
      const user = await User.findById(payload.uid);

      if (!user) {
        return res.status(401).json({ error: "Token inválido" });
      }

      req.auth = user;
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json(error);
    }
  },

  authVerify(req, res) {
    return res.json(req.headers.authorization);
  }

};
