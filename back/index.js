const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const routers = require('./src/routes');

const port = process.env.PORT || 3001
const app = express();

app.get('/', (_req, res) => {
  res.render('home');
});

app.use(bodyParser.json());
app.use(routers);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});