const { Router } = require('express');
const registerController = require('../Controller/register');

const { fieldsValidation } = require('../middleware/register');

const router = Router();

router.post('/', fieldsValidation, registerController);

module.exports = router;
