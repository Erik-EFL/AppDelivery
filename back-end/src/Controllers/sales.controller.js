const salesServices = require('../Services/sale.services');

const salesController = {
  async create(req, res) {
    const body = salesServices.validateBody(req.body);

    const sale = await salesServices.create(body);

    return res.status(201).json(sale);
  },

  async getById(req, res) {
    const { id } = req.params;

    const sale = await salesServices.findSaleById(id);

    return res.status(200).json(sale);
  },
};

module.exports = salesController;
