const { Op } = require('sequelize');
const NotFoundError = require('../Errors/NotFoundError');
const UnauthorizedError = require('../Errors/UnauthorizedError');
const ValidationError = require('../Errors/ValidationError');
const Joi = require('joi');
const db = require('../database/models');
const { runSchema } = require('../utils/schemas');
const user = require('./user.services');
const productsServices = require('./products.services');

const saleService = {
  findAllSalesBySellerId: async (sellerId) => {
    if (user.isSeller(sellerId)) {
      const sellerSales = await db.sale.findAll({
        where: { sellerId },
        include: [{
          model: db.product,
          as: 'products',
          // attributes: { exclude: [] },
        }],
      });
      if (!sellerSales.length) throw new NotFoundError('Sales not found');
      return sellerSales;
    }
    throw new NotFoundError('User not found');
  },
  findSaleById: async (saleId) => {
    const sale = await db.sale.findOne({
      where: { id: saleId },
      include: [{
        model: db.product,
        as: 'products',
        // attributes: { exclude: [] },
      }],
    });
    if (!sale) throw new NotFoundError('Sale not found');

    return sale;
  },
  updateSaleStatusBySeller: async ({ params, id }, { status }) => {
    const isValidStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'].includes(status);
    if (!isValidStatus) throw new UnauthorizedError('Unauthorized');
    const sale = await db.sale.findOne({
      where: { [Op.and]: [{ sellerId: id }, { id: params.id }] },
    });
    if (!sale) throw new NotFoundError('Sale not found - Update');
    await db.sale.update({ status }, { where: { id: params.id } });
  },
  updateSaleStatusByCustomer: async ({ params, id }, { status }) => {
    if (status !== 'Entregue') throw new UnauthorizedError('Unauthorized');
    const sale = await db.sale.findOne({
      where: { [Op.and]: [{ userId: id }, { id: params.id }] },
    });
    if (!sale) throw new NotFoundError('Sale not found - Costumer');
    await db.sale.update({ status }, { where: { id: params.id } });
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
    deliveryAddress: Joi.string().required(),
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
  
      const productIds = products.map((product) => product.productId);
  
      await this.validateProducts(productIds);
  
      const [sale, created] = await db.sale.findOrCreate({
        where: {
          ...body,
          saleDate: new Date(),
          status: 'Pendente',
        },
      });
  
      if (created) {
        await this.addToSalesProducts(sale.id, products);
      }
  
      return sale;
    },
};

module.exports = saleService;
