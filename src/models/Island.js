const mongoose = require('mongoose');

const IslandSchema = new mongoose.Schema({
  owner: String,
  island: String,
  fruit: String,
  fruit_url: String,
  hemisphere: String,
  turnip_rice: Number,
  dodo_code: String,
}, {
  collation: { locale: 'en', strength: 2},
});


module.exports = mongoose.model('Island', IslandSchema);