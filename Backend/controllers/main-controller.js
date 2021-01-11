const mainRouter = require("express").Router();
const verifyToken = require("../auth/verifyToken");
require("dotenv").config();

const register = require("../Models/register");
const login = require("../Models/login");
const { addTrip } = require("../Models/trips");

mainRouter.post("/register", register);
mainRouter.post("/login", login);
mainRouter.post("/trips", verifyToken, addTrip);

module.exports = mainRouter;
