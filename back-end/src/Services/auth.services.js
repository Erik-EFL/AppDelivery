const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../Errors/UnauthorizedError');
const { JWT_SECRET } = require('../utils/getJwtKey');

const auth = {

  createToken(data) {
    const token = jwt.sign({ data }, JWT_SECRET || 'chaveDoTolkien', {});
    return token;
  },

  validateToken: (token) => {
    try {
      const payload = jwt.verify(token, JWT_SECRET || 'chaveDoTolkien');
      return payload;
    } catch (e) {
      throw new UnauthorizedError('Expired or invalid token');
    }
  },
};

module.exports = auth;
