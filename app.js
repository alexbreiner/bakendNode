const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Get database
const database = require('./config/database');
//authentication 
const auth = require('./auth/main_auth');

//employee
const empleadosRouter = require('./routes/empleados.router')
const usuariosRouter = require('./routes/usuarios.router')
const usersRouter = require('./routes/users.router')

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mongo connection 
database.mongoConnect();

//routers
app.use('/users', usersRouter);
app.use(auth);
app.use('/empleados', empleadosRouter);
app.use('/usuarios', usuariosRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
