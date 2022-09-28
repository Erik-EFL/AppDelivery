const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/getJwtKey');

const auth = {

  createToken(data) {
    const token = jwt.sign({ data }, process.env.JWT_SECRET || 'secret', {});
    return token;
  },

  validateToken: (token) => {
    try {
      const payload = jwt.verify(token, JWT_SECRET || 'secret');
      return payload;
    } catch (e) {
      const error = new Error('Expired or invalid token');
      error.name = 'UnauthorizedError';
      throw error;
    }
  },
};

module.exports = auth;
