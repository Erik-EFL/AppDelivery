const Joi = require('joi');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const db = require('../database/models');
const { runSchema } = require('../utils/schemas');
require('dotenv/config');
const NotFoundError = require('../Errors/NotFoundError');

const loginServices = {
  validateBody: runSchema(Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  })),

  createToken(data) {
    const token = jwt.sign({ data }, process.env.JWT_SECRET, {});
    return token;
  },

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

    const token = this.createToken(userWithoutPassword);

    return { token };
  },
};

module.exports = loginServices;
