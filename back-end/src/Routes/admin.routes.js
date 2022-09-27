const { Router } = require('express');
const controller = require('../Controllers/admin.controller');
const auth = require('../Middlewares/auth.middleware');

const { createByAdminValidation } = require('../Middlewares/user.middleware');
const adminRouter = Router();

adminRouter.post(
  '/manage',
  auth.required,
  createByAdminValidation,
  controller.create);
adminRouter.get('/manage', auth.required, (_req, res) => res.status(200).send());

module.exports = adminRouter;
