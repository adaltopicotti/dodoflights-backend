const Island = require('../models/Island');

module.exports = {

  async index(req, res) {
    const { fruit } = req.query;
    // console.log(fruit);
    let islands = await Island.find({ fruit: fruit });
    console.log(new Date(Date.now()).toLocaleString())
    if (!fruit) {
     islands = await Island.find();
    }

    return res.json(islands);
  },

  async store(req, res) {
    const { ownerName, islandName, fruit, hemisphere, turnipPrice, dodoCode} = req.body;
    let island = await Island.find({ ownerName: ownerName })
    if(island.length < 1) {
      switch(fruit.toUpperCas()) {
        case 'APPLE':
          fruit_url: 'https://firebasestorage.googleapis.com/v0/b/dodo-flights.appspot.com/o/apple.png?alt=media&token=22760cb6-2fbc-4c31-9d1d-4ebcdaac2e50'
          break;
        case 'CHERRY':
          fruit_url: ''
          break;
        case 'ORANGE':
          fruit_url: ''
          break;
        case 'PEACH':
          fruit_url: ''
          break;
        case 'PEAR':
          fruit_url: ''
          break;
        case y:
          // code block
          break;
        default:
          // code block
      }
      island = await Island.create({
        ownerName,
        islandName,
        fruit,
        hemisphere,
        turnipPrice,
        dodoCode,
        createdAt: new Date(Date.now()).toLocaleString()
      });

    }

    return res.json(island);
  }
}