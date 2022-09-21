const express = require('express');
const loginRoutes = require('../Routes/login.routes');
require('express-async-errors');
const errorMiddleware = require('../Middlewares/error.middleware');
const app = express();
app.use(express.json());

app.use('/login', loginRoutes);

app.use(errorMiddleware);

module.exports = app;
