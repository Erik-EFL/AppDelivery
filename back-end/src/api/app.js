const express = require('express');
require('express-async-errors');
const errorMiddleware = require('../middleware/error');

const registerRoute = require('../routes/register');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/register', registerRoute);
app.use(errorMiddleware);

module.exports = app;
