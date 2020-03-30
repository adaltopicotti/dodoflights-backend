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
    const { owner, island, fruit, hemisphere, turnip_price, dodo_code } = req.body;
    // let island = await Island.find({ ownerName: ownerName })
    // if(island.length < 1) {
      switch(fruit.toUpperCase()) {
        case 'APPLE':
          fruit_url = 'https://firebasestorage.googleapis.com/v0/b/dodo-flights.appspot.com/o/apple.png?alt=media&token=22760cb6-2fbc-4c31-9d1d-4ebcdaac2e50'
          break;
        case 'CHERRY':
          fruit_url = 'https://firebasestorage.googleapis.com/v0/b/dodo-flights.appspot.com/o/cherry.png?alt=media&token=73d3ff4f-b517-4c89-8ff5-0d709e7da995'
          break;
        case 'ORANGE':
          fruit_url = 'https://firebasestorage.googleapis.com/v0/b/dodo-flights.appspot.com/o/orange.png?alt=media&token=7b4b8e49-c601-438d-baf4-fb7b0237ef7a'
          break;
        case 'PEACH':
          fruit_url = 'https://firebasestorage.googleapis.com/v0/b/dodo-flights.appspot.com/o/peach.png?alt=media&token=3b855f4a-607e-4a57-83d3-68bc1a3048fd'
          break;
        case 'PEAR':
          fruit_url = 'https://firebasestorage.googleapis.com/v0/b/dodo-flights.appspot.com/o/pear.png?alt=media&token=4fa4931f-be40-45c1-a981-74d9df5a486e'
          break;
        default:
      }
      const island_post = await Island.create({
        owner,
        islan,
        fruit,
        fruit_url,
        hemisphere,
        turnip_price,
        dodo_code,
        createdAt: new Date(Date.now()).toLocaleString()
      });

    // }

    return res.json(island_post);
  }
}