const Joi = require("@hapi/joi");

const registerVaildation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    displayName: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    phone: Joi.string().min(10).required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};

const tripeInfoVaildation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(10).required(),
    place: Joi.string().min(2).required(),
    numOfPeople: Joi.number().required(),
    price: Joi.string().required(),
  });
  return schema.validate(data);
};

module.exports = {
  registerVaildation,
  loginValidation,
  tripeInfoVaildation,
};
