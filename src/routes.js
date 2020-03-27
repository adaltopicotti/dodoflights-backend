const express = require('express');

const IslandController = require('./controllers/IslandController');

const routes = express.Router();

routes.get('/islands', IslandController.index);
routes.post('/islands', IslandController.store);

module.exports = routes;