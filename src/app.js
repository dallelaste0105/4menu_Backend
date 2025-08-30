const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes.js'); // se tiver usuários
const restauranteRoutes = require('./routes/restauranteRoutes.js');

app.use(express.json());
app.use(userRoutes);
app.use(restauranteRoutes);

module.exports = app;