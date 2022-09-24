require('dotenv/config');
const jwt = require('jsonwebtoken');

const auth = {

//   createToken: (payload) => {
//     const token = jwt.sign(payload, process.env.JWT_SECRET);
//     return token;
//   },

  validateToken: (token) => {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret');
      return payload;
    } catch (e) {
      const error = new Error('Expired or invalid token');
      error.name = 'UnauthorizedError';
      throw error;
    }
  },
};

module.exports = auth;