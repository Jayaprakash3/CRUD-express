var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const swaggerJSDoc = require('swagger-jsdoc');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getRouter = require('./routes/getmethod');
var postRouter = require('./routes/postmethod');
var putRouter = require('./routes/putmethod');
var deleteRouter = require('./routes/deletemethod');
var deptRouter = require('./routes/department')


var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/departmentDB');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/get', getRouter);
app.use('/post', postRouter);
app.use('/put', putRouter);
app.use('/delete', deleteRouter);
app.use('/department', deptRouter);

deptModel = require('./models/deptModel');



let swaggerDefinition = {
  info: {
    title: 'Learning - API Swagger Definition',
    version: '1.0.0',
    description: 'Demonstration of Organization Employee Portal API with Swagger',
  },
  // host: config.project.url,
  basePath: '/',
};


// Options for the swagger docs
let options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
let swaggerSpec = swaggerJSDoc(options);

// serve swagger
app.get('/swagger.json', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
