const registerSevice = require('../Services/register.services');
const salesServices = require('../Services/sales.services');

const salesController = {
  async create(req, res) {
    const { authorization } = req.headers;
    const userId = registerSevice.getUserId(authorization);
    const body = salesServices.validateBody(req.body);

    const sale = await salesServices.create(userId, body);

    return res.status(201).json(sale);
  },
};

module.exports = salesController;