const Passport = require('../models/Passport');

module.exports = {
  async index(req, res) {
    
    const passport = await Passport.find({ user });
  }
}