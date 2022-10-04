const Joi = require('joi');
const ValidationError = require('../Errors/ValidationError');

const userSchema = {
  register: (body) => {
    const schema = Joi.object({
      name: Joi.string().min(12).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(body);
    if (error) {
      throw new ValidationError(error.message);
    }
  },
  createByAdmin: (body) => {
    const schema = Joi.object({
      name: Joi.string().min(12).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      role: Joi.string().valid('customer', 'seller', 'admin').required(),
    });

    const { error } = schema.validate(body);
    if (error) {
      throw new ValidationError(error.message);
    }
  },
};

module.exports = userSchema;
