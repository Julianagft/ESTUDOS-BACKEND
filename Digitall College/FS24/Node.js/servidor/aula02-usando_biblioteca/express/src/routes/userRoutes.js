const express = require("express");
const UserController = require("../controllers/UserController");

const userRoutes = express.Router();
const userControler = new UserController();

userRoutes.get("/users", userControler.listUsers);
userRoutes.post("/users", userControler.createUser);

module.exports = userRoutes;
