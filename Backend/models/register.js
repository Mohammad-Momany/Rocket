const User = require("../schemas/userSchema");
const bcrypt = require("bcrypt");
require("dotenv").config();

const { registerVaildation } = require("../schemas/validation");

const register = async (req, res) => {
  const { error } = registerVaildation(req.body);
  if (error) {
    return res.send(error.details[0].message);
  }
  const { name, displayName, email, phone, password } = req.body;
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = new User({
    name,
    displayName,
    email,
    phone,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    const { name, email, phone } = err.keyPattern;
    if (name === 1) {
      res.send("name must be unique");
    }
    if (email === 1) {
      res.send("email must be unique");
    }
    if (phone === 1) {
      res.send("phone must be unique");
    }
    res.send(err);
  }
};

module.exports = register;
