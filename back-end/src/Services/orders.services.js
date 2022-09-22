const Joi = require('joi');
const db = require('../database/models');
const jwt = require('jsonwebtoken');
const { runSchema } = require('../utils/schemas');

const ordersService = {
  getUserId(token) {
    const { data } = jwt.decode(token);
    return data.id;
  },

  validateBody: runSchema(Joi.object({
    sellerId: Joi.number().integer().positive().required(),
    products: Joi.array().items(Joi.object({
      productId: Joi.number().integer().positive().required(),
      quantity: Joi.number().integer().positive().min(1).required(),
    })).required(),
    totalPrice: Joi.number().precision(2).positive().required(),
    deliveryAdress: Joi.string().required(),
    deliveryNumber: Joi.number().integer().positive().required(),
  }))
};

module.exports = ordersService;