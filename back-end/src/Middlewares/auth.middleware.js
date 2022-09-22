const UnauthorizedError = require('../Errors/UnauthorizedError');
const { validateToken } = require('../Services/auth.services');

const authMiddleware = {
  required: (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        throw new UnauthorizedError('Token not found');
    }
    const { data } = validateToken(authorization);
    req.userId = data.id;
    next();
  },
};

module.exports = authMiddleware;