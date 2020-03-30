const express = require('express');

const IslandController = require('./controllers/IslandController');
const UserController = require('./controllers/UserController');

const routes = express.Router();




// routes.use('/users', authMiddleware);

routes.get('/users', UserController.authMiddleware, UserController.index);
routes.post('/signup', UserController.signup);
routes.post('/login', UserController.login);

routes.get('/islands', IslandController.index);
routes.post('/islands', IslandController.store);

module.exports = routes;