const Joi = require('joi');
const jwt = require('jsonwebtoken');
const db = require('../database/models');
const { runSchema } = require('../utils/schemas');
const productsServices = require('./products.services');
const ValidationError = require('../Errors/ValidationError');

const salesService = {
  getUserId(token) {
    const { data } = jwt.decode(token);
    return data.id;
  },

  validateBody: runSchema(Joi.object({
    sellerId: Joi.number().integer().positive().required(),
    userId: Joi.number().integer().positive().required(),
    products: Joi.array().items(Joi.object({
      productId: Joi.number().integer().positive().required(),
      quantity: Joi.number().integer().positive().min(1)
      .required(),
    })).required(),
    totalPrice: Joi.number().precision(2).positive().required(),
    deliveryAdress: Joi.string().required(),
    deliveryNumber: Joi.string().required(),
  })),

    //  Essa função valida se todos os produtos passados na requisição existem no banco de dados
  async validateProducts(products) {
    const existingProducts = await productsServices.checkProducts(products);
    if (products.length !== existingProducts.length) {
      throw new ValidationError('Some products do not exist in the database');
    }
  },

    //  Se uma venda for criada, essa função vai adicionar os dados necessários na tabela N:N salesProducts
  async addToSalesProducts(saleId, products) {
    await Promise.all(products.map(async (product) => {
      await db.salesProducts.create({
        saleId,
        productId: product.productId,
        quantity: product.quantity,
      });
    }));
  },

  async create(payload) {
    const { products, ...body } = payload;

    await this.validateProducts(products);

    const [sale, created] = await db.sale.findOrCreate({
      where: {
        ...body,
        salesDate: new Date(),
        status: 'Pendente',
      },
    });

    if (created) {
      await this.addToSalesProducts(sale.id, products);
    }

    return sale;
  },
};

module.exports = salesService;