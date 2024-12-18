const Joi = require("joi");

const createContactSchema = Joi.object({
  firstname: Joi.string().min(3).max(30).required(),
  lastname: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(5).max(30).required(),
});


module.exports = {createContactSchema}