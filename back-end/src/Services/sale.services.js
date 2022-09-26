const { Op } = require('sequelize');
const db = require('../database/models');
const NotFoundError = require('../Errors/NotFoundError');
const user = require('./user.services');

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
  updateSaleStatus: async ({ params, id, role }, { status }) => {
    const isValidStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'].includes(status);
    if (!isValidStatus) throw new NotFoundError('Sale not found');

    const update = async (chaveId) => {
      return await db.sale.findOne({
        where: {
          [Op.and]: [{ [chaveId]: id }, { id: params.id }],
        },
      });
    }
    let sale;
    if (role === 'seller') sale = update('sellerId');
    if (role === 'customer') sale = update('userId');
    if (!sale) throw new NotFoundError('Sale not found');

    await db.sale.update({ status }, {
      where: { id: params.id },
    });
  },
};

module.exports = saleService;
