const UnauthorizedError = require('../Errors/UnauthorizedError');
const { validateToken } = require('../Services/auth.services');

const authMiddleware = {
  required: (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new UnauthorizedError('Token not found');
    }
    const { data } = validateToken(authorization);
    req.id = data.id;
    req.role = data.role;
    next();
  },

  verifyIfUserRouteAuthorized: (req, _res, next) => {
    const { role } = req;
    if (role !== 'user') {
      throw new UnauthorizedError('User not authorized');
    }
    next();
  },

  verifyIfAdminRouteAuthorized: (req, _res, next) => {
    const { role } = req;
    if (role !== 'admin') {
      throw new UnauthorizedError('User not authorized');
    }
    next();
  },

  verifyIfUserIsOwnerAccount: (req, _res, next) => {
    const { id } = req.params;
    const { id: userId } = req;
    if (id !== userId) {
      throw new UnauthorizedError('User not authorized');
    }
    next();
  }
};

module.exports = authMiddleware;
