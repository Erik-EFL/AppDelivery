const express = require('express');
require('express-async-errors');

const registerRoute = require('../routes/register');

const app = express();

app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

app; use('/register', registerRoute);

module.exports = app;
