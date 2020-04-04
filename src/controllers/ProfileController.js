const User = require('../models/User');

const jwt = require('../../jwt');

module.exports = {
  async index(req, res) {

    const {uid} = jwt.verify(req.headers.authorization.replace("Bearer ", ""));
    console.log(uid);

    const user = await User.findById(uid);
    console.log(user)
    return res.json(user);
  }
}