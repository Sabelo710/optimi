var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); // Import the cors package

var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');

var app = express();

// Allow requests only from specific origins
const corsOptions = {
    origin: ['http://localhost:5173'],
  };

// Enable CORS for all routes
app.use(cors());
// server static files from public
app.use(express.static('public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/projects', projectsRouter);

module.exports = app;
