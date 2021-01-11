const mongoose = require("mongoose");
require('dotenv').config();
const db = mongoose.connection;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.DB_URL, options);

db.once("connected", () => {
  console.log("MongoDB connection " + process.env.DB_URL);
});
db.once("error", () => {
  console.log("MongoDB connection error " + process.env.DB_URL);
});
db.once("disconnected", () => {
  console.log("MongoDB disconnected");
});

process.on("SIGINT", () => {
  db.close(() => {
    console.log("MongoDB disconnected through app termination");
    process.exit(0);
  });
});
