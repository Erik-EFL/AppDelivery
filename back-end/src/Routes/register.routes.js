const { Router } = require('express');
const controller = require('../Controllers/register.controller');

const { registerValidation } = require('../Middlewares/user.middleware');

const router = Router();
router.post('/', registerValidation, controller.register);

module.exports = router;
