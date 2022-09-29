const { Router } = require('express');
const customerController = require('../Controllers/customer.controller');
const auth = require('../Middlewares/auth.middleware');

const router = Router();
router.put('/orders/:id', auth.required, customerController.updateSaleStatus);

module.exports = router;
