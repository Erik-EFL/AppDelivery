const jwt = require('jsonwebtoken');
require('dotenv/config');

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found!' });
  }

  await jwt.verify(
    authorization, 
    process.env.JWT_SECRET,
    (err, _decoded) => {
      if (err) return res.status(401).json({ message: 'You must provide a valid token' });
    },
  );

    next();
};

module.exports = authMiddleware;