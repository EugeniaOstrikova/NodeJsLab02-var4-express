let createError = require('http-errors');
let express = require('express');
let logger = require('morgan');

let authorRouter = require('./routes/author.router');
let publisherRouter = require('./routes/publisher.router');

let app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/authors', authorRouter);
app.use('/publishers', publisherRouter);

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
  res.status(err.status || 500).send(err.message);
  res.render('error');
});

module.exports = app;