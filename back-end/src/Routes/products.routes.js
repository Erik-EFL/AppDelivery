const { Router } = require('express');
const productsController = require('../Controllers/products.controller');

const loginRouter = Router();

loginRouter.get('/', productsController.list);
loginRouter.get('/:id', productsController.get);

module.exports = loginRouter;