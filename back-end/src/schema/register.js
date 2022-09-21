const Joi = require('joi');

const registerSchema = {
  register: () => {
    const schema = Joi.object({
      name: Joi.string().min(12).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(body);
    if (error) throw new Error('TODO: error');
  }
}

module.exports = registerSchema;
