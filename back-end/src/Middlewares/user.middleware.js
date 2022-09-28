const schema = require('../schema/user.schema');

const userMiddleware = {
  registerValidation: (req, _res, next) => {
    schema.register(req.body);
    next();
  },
  createByAdminValidation: (req, _res, next) => {
    schema.createByAdmin(req.body);
    next();
  },
};

module.exports = userMiddleware;
