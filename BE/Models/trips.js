const Router = require("express").Router();
require("dotenv").config();

const TripeInfo = require("../schema/tripeInfoSchema");
const { tripeInfoVaildation } = require("../schema/validation");

const addTrip = async (req, res) => {
  const { error } = tripeInfoVaildation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }
  const { place, numOfPeople, price } = req.body;
  const { email, phone } = req.user;
  const tripeInfo = new TripeInfo({place, numOfPeople, price, email, phone});
  try {
    const saveTripeInfo = await tripeInfo.save();
    res.send(saveTripeInfo);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  addTrip,
};
