const { Router } = require('express');

const { fieldsValidation } = require('../middleware/register');

const router = Router();

router.post('/', fieldsValidation);

module.exports = router;
