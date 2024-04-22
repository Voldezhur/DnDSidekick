require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

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
