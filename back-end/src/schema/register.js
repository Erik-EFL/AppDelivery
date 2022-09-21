const Joi = require('joi');

const registerSchema = {
  register: () => {
    const schema = Joi.object({
      name: Joi.string().min(12).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      role: Joi.string().valid('administrator', 'seller', 'customer').required(),
    });

    const { error } = schema.validate(body);
    if (error) throw new Error('TODO: error');
  }
}

module.exports = registerSchema;
