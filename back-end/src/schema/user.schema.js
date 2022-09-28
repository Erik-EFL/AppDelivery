const Joi = require('joi');

const userSchema = {
  register: (body) => {
    const schema = Joi.object({
      name: Joi.string().max(11).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(body);
    if (error) {
      const e = new Error('Some required fields are missing');
      e.name = 'BadRequest';
      throw e;
    }
  },
  createByAdmin: (body) => {
    const schema = Joi.object({
      name: Joi.string().max(11).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      role: Joi.string().valid('customer', 'seller', 'admin').required(),
    });

    const { error } = schema.validate(body);
    if (error) {
      const e = new Error(error.message);
      e.name = 'BadRequest';
      throw e;
    }
  },
};

module.exports = userSchema;
