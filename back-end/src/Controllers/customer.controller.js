const saleService = require('../Services/sale.services');

const customerController = {
  updateSaleStatus: async (req, res) => {
    await saleService.updateSaleStatusByCustomer(req, req.body);
    res.status(200).json({ ok: true });
  },

  getAllSalesByCustomerId: async (req, res) => {
    const sales = await saleService.getAllSalesByCustomerId(req.id);
    res.status(200).json(sales);
  }
};

module.exports = customerController;
