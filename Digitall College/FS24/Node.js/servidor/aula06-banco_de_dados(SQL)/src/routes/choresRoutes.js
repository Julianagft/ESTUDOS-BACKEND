const express = require("express");
const ChoreController = require("../controllers/choreController");
const UserRepository = require("../repositories/userRepository");
const ChoreService = require("../services/choresService");

const choreRoutes = express.Router();

const userRepository = new UserRepository();
const choreService = new ChoreService(userRepository);
const choreController = new ChoreController(choreService);



choreRoutes.post("/:id", choreController.addChore);

module.exports = choreRoutes;
