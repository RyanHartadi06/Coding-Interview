const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const authRouter = require('./app/api/auth/router');
const categoryRouter = require('./app/api/category/router');

const URL = `/api/v1`;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/' , (req , res) => {
  res.json({message : "Hello World"});
});
app.use(`${URL}`, authRouter);
app.use(`${URL}`, categoryRouter);

module.exports = app;
