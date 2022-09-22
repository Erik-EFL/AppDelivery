const schema = require('../schema/register');

const registerMiddleware = {
  fieldsValidation: (req, _res, next) => {
    schema.register(req.body);
    next();
  },
};

module.exports = registerMiddleware;
