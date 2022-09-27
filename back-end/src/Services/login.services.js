const Joi = require('joi');
const md5 = require('md5');
const db = require('../database/models');
const { runSchema } = require('../utils/schemas');
require('dotenv/config');
const NotFoundError = require('../Errors/NotFoundError');
const auth = require('./auth.services');

const loginServices = {
  validateBody: runSchema(Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  })),

  async login(payload) {
    const user = await db.user.findOne({
      where: { email: payload.email },
    });

    if (!user) throw new NotFoundError('User not found, please check your email and/or password');

    const passwordHash = md5(payload.password);
    const { password, ...userWithoutPassword } = user.dataValues;

    if (passwordHash !== password) {
      throw new NotFoundError('Please check your email and/or password');
    }

    const token = auth.createToken(userWithoutPassword);

    return { token };
  },
};

module.exports = loginServices;
