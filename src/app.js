const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();

app.use(cors()); // 👈 libera acesso do front
app.use(express.json());

app.use('/clientes', clienteRoutes);

module.exports = app;
