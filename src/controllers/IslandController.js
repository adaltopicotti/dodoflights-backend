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