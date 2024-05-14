const express = require("express");
const UserController = require("../controllers/userController");
const UserRepository = require("../repositories/userRepository");
const UserService = require("../services/userService");

const userRoutes = express.Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

userRoutes.get("/", userController.listAll);

userRoutes.post("/", userController.create);

userRoutes.get("/:id", userController.findById);

userRoutes.put("/:id", userController.updateUser);

userRoutes.delete("/:id", userController.deleteUser);

module.exports = userRoutes;
