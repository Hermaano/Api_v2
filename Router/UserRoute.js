const express = require("express");

const {
  AddNewUser,
  GetAllUsers,
  DeleteUser,
  GetUserById,
  UpdateUser,
} = require("../Controller/UserController");

const Router = express.Router();

Router.post("/user", AddNewUser);

Router.get("/users", GetAllUsers);

Router.get("/user/:id", GetUserById);

Router.delete("/user/:id", DeleteUser);

Router.put("/user/:id", UpdateUser);

module.exports = Router;
