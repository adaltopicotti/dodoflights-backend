const mongoose = require('mongoose');

const IslandSchema = new mongoose.Schema({
  ownerName: String,
  islandName: String,
  fruit: String,
  hemisphere: String,
  turnipPrice: Number,
  dodoCode: String,
  createdAt: String
}, {
  collation: { locale: 'en', strength: 2},
  toJSON: {
    virtuals: true
  }
});

IslandSchema.virtual('fruit_url').get(function() {
  return `http://localhost:3333/files/${this.fruit}.png`
});

module.exports = mongoose.model('Island', IslandSchema);