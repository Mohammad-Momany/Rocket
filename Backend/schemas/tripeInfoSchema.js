const mongoose = require("mongoose");

const tripeInfoSchema = new mongoose.Schema({
  title: { type: String, required: true, max: 255 },
  place: { type: String, required: true },
  numOfPeople: { type: Number, required: true },
  price: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
});

module.exports = mongoose.model("Tripe", tripeInfoSchema);
