require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 8000;

// Конфигурация CORS
const cors = require('cors');
app.use(cors());

// Middleware для подключения к базе данных PostgreSQL
app.use((req, res, next) => {
  req.db = require("./postgresConfig")
  next()
});

app.use(express.json());

// Роутинг
app.use('/', require('./router').mainRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
