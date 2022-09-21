const Joi = require('joi');
const db = require('../database/models');
const { runSchema } = require('../utils/schemas');
require('dotenv/config');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const JWT_SECRET = require('../jwt.evaluation.key');

const loginServices = {
  validateBody: runSchema(Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  })),

  createToken(data) {
    const token = jwt.sign({ data }, JWT_SECRET, {});
    return token;
  },

  async login(payload) {
    const user = await db.Users.findOne({
      where: { email: payload.email }
    })

    const passwordHash = md5(payload.password);
    const { password, ...userWithoutPassword } = user.dataValues;

    if (!user || passwordHash !== password) {
      throw new Error('Invalid fields');
    }

    const token = this.createToken(userWithoutPassword);

    return { token };
  }
}

module.exports = loginServices;