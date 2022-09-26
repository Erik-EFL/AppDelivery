require('express-async-errors');
const express = require('express');
const cors = require('cors');

const registerRoutes = require('../Routes/register.routes');
const loginRoutes = require('../Routes/login.routes');
const sellerRoutes = require('../Routes/seller.routes');
const productsRoutes = require('../Routes/products.routes');

const errorMiddleware = require('../Middlewares/error.middleware');
const salesRouter = require('../Routes/sales.routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/seller', sellerRoutes);
app.use('/products', productsRoutes);
app.use('/orders', salesRouter);
app.use(errorMiddleware);

module.exports = app;
