const express = require("express");

const SessionController = require("./controllers/SessionController");
const ProfileController = require("./controllers/ProfileController");
const IslandController = require("./controllers/IslandController");
const UserController = require("./controllers/UserController");

const routes = express.Router();


// DEV: Listagem de usuários
routes.get("/users", SessionController.authMiddleware, UserController.index);
routes.get("/profile", SessionController.authMiddleware, ProfileController.index);

// SignUp: Cadastro de User
routes.post("/signup", UserController.signup);

// Login: Criando sessão
routes.post("/login", SessionController.create);
// Auth: verifica se há usuário logado
routes.get("/auth", SessionController.authMiddleware, SessionController.authVerify);

routes.get("/islands", IslandController.index);
routes.post("/islands", IslandController.store);

module.exports = routes;
