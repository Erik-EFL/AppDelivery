const saleService = require('../Services/sale.services');

const customerController = {
  updateSaleStatus: async (req, res) => {
    await saleService.updateSaleStatusByCustomer(req, req.body);
    res.status(200).json({ ok: true });
  },
};

module.exports = customerController;
