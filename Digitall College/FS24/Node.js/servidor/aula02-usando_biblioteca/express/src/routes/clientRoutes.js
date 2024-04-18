const express = require("express");
const ClientController = require("../controllers/ClientController");

const clientRoutes = express.Router();

const clientController = new ClientController();

clientRoutes.get("/client", clientController.listClient);
clientRoutes.post("/client", clientController.createClient);

module.exports = clientRoutes;
