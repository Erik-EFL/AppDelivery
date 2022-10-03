const { Router } = require('express');
const controller = require('../Controllers/admin.controller');
const admin = require('../Middlewares/admin.middleware');

const { createByAdminValidation } = require('../Middlewares/user.middleware');

const adminRouter = Router();

adminRouter.post(
  '/manage',
  admin.required,
  createByAdminValidation,
  controller.create,
);
adminRouter.get('/manage', admin.required, controller.getAll);

module.exports = adminRouter;
