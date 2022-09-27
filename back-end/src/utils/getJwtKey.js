const fs = require('fs');

const getJwtKey = () => fs.readFileSync('jwt.evaluation.key', 'utf-8');

const JWT_SECRET = getJwtKey();

module.exports = { JWT_SECRET };