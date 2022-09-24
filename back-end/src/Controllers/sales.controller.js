const salesServices = require('../Services/sales.services');

const salesController = {
  async create(req, res) {
    const body = salesServices.validateBody(req.body);

    const sale = await salesServices.create(body);

    return res.status(201).json(sale);
  },
};

module.exports = salesController;