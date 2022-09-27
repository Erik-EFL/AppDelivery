const { Router } = require('express');
const controller = require('../Controllers/seller.controller');
const auth = require('../Middlewares/auth.middleware');

const router = Router();
router.get('/orders', auth.required, controller.findAllSalesBySellerId);
router.get('/orders/:id', auth.required, controller.findSaleById);
router.put('/orders/:id', auth.required, controller.updateSaleStatus);

module.exports = router;
