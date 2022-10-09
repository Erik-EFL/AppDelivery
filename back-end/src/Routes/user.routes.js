const { Router } = require('express');
const controller = require('../Controllers/user.controller');
const auth = require('../Middlewares/auth.middleware');

const router = Router();

router.get('/profile', auth.required, controller.getAllUsers);
router.get('/profile/:id', auth.required, controller.findUserById);
router.get('/profile/role/:role', auth.required, controller.getUserByRole);

module.exports = router;
