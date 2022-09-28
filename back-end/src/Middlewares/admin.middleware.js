const UnauthorizedError = require('../Errors/UnauthorizedError');
const { validateToken } = require('../Services/auth.services');
const { isAdmin } = require('../Services/user.services');

const adminMiddleware = {
  required: (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new UnauthorizedError('Token not found');
    }
    const { data } = validateToken(authorization);

    if (!isAdmin(data.id)) {
      throw new UnauthorizedError('Unauthorized');
    }
    req.adminId = data.id;
    next();
  },
};

module.exports = adminMiddleware;
