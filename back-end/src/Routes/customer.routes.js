const { Router } = require('express');
const customerController = require('../Controllers/customer.controller');
const auth = require('../Middlewares/auth.middleware');

const router = Router();
router.get('/orders', auth.required, customerController.getAllSalesByCustomerId);
router.put('/orders/:id', auth.required, customerController.updateSaleStatus);

module.exports = router;
