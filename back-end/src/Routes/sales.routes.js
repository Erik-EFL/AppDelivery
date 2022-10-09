const { Router } = require('express');
const salesController = require('../Controllers/sales.controller');
const auth = require('../Middlewares/auth.middleware');

const salesRouter = Router();

salesRouter.get('/:id', auth.required, salesController.getById);
salesRouter.post('/', auth.required, salesController.create);

module.exports = salesRouter;
