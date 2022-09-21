const { Router } = require('express');
const loginController = require('../Controllers/login.controller');

const loginRouter = Router();

loginRouter.post('/', loginController.login)

module.exports = loginRouter;