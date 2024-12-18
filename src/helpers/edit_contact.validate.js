const Joi = require("joi");

const editContactSchema = Joi.object({
  firstname: Joi.string().min(3).max(30).required(),
  lastname: Joi.string().min(3).max(30).required(),
});


module.exports = {editContactSchema}