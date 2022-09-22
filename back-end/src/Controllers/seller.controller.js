const saleService = require('../Services/sale.services');

const sellerController = {
  findAllSalesBySellerId: async (req, res) => {
    const sales = await saleService.findAllSalesBySellerId(req.userId);
    res.status(200).json(sales);
  },
  findSaleById: async (req, res) => {
    const sale = await saleService.findSaleById(req.params.id);
    res.status(200).json(sale);
  },
};

module.exports = sellerController;
