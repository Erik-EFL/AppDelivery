const { Router } = require('express');
const controller = require('../Controllers/register.controller');

const { fieldsValidation } = require('../Middlewares/register.middleware');

const router = Router();
router.post('/', fieldsValidation, controller.register);

module.exports = router;
