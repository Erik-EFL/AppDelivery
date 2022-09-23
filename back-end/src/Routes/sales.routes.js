const { Router } = require('express');
const salesController = require('../Controllers/sales.controller');
const authMiddleware = require('../Middlewares/auth.middleware');

const salesRouter = Router();

salesRouter.post('/', authMiddleware, salesController.create);

module.exports = salesRouter;