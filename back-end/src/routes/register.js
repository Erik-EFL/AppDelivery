const { Router } = require('express');
const controller = require('../Controller/register');

const { fieldsValidation } = require('../middleware/register');

const router = Router();
router.post('/', fieldsValidation, controller.register);

module.exports = router;
