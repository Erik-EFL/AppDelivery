const express = require('express');
const loginRoutes = require('../Routes/login.routes');
import 'express-async-errors'
const app = express();
app.use(express.json());

app.use('/login', loginRoutes);

module.exports = app;
