const productsServices = require('../Services/products.services');

const productsController = {
  async list(_req, res) {
    const products = await productsServices.list();

    return res.status(200).json(products);
  },

  async get(req, res) {
    const id = productsServices.validateParamsId(req.params.id);

    const product = productsServices.get(id);

    return res.status(200).json(product);
  },
};

module.exports = productsController;