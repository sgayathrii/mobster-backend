const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const mobsRouter = require('./routes/mobs');
const membersRouter = require('./routes/members');
var corsOptions = {
  origin: 'https://felicialyden.github.io/mobster-frontend/',
};
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/mobs', mobsRouter);
app.use('/members', membersRouter);

module.exports = app;
