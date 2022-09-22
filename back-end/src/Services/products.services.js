const Joi = require('joi');
const db = require('../database/models');
const { runSchema } = require('../utils/schemas');
const NotFoundError = require('../Errors/NotFoundError');

const productsServices = {
  validateParamsId: runSchema(Joi.object({
    id: Joi.number().required().positive().integer(),
  })),

  async list() {
    const products = await db.product.findAll();

    return products;
  },

  async get(id) {
    const product = await db.product.findByPk(id);
    if (!product) throw new NotFoundError('Product not found');

    return product;
  }
};

module.exports = productsServices;