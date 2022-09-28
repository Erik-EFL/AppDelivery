const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../Errors/UnauthorizedError');

const auth = {

  createToken(data) {
    const token = jwt.sign({ data }, process.env.JWT_SECRET || 'chaveDoTolkien', {});
    return token;
  },

  validateToken: (token) => {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret');
      return payload;
    } catch (e) {
      throw new UnauthorizedError('Expired or invalid token');
    }
  },
};

module.exports = auth;
