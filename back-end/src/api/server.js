const port = process.env.PORT || 3001;
require('express-async-errors');
const app = require('./app');

app.listen(port);
console.log(`Api rodando na porta ${port}`);
