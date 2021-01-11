const User = require("../schema/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const { loginValidation } = require("../schema/validation");

const login = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.send("Email is wrong");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.send("password is wrong");

  const payloads = {
    _id: user._id,
    name: user.name,
    displayName: user.displayName,
    email: user.email,
    phone: user.phone,
  };
  const options = {
    expiresIn: process.env.TOKEN_EXPIRATION,
  };
  const token = jwt.sign(payloads, process.env.TOKEN_SECRET, options);
  res.header("auth-token", token);
  res.send(token);
};

module.exports = login;
