const express = require('express'),
      app = express(),
      cors = require('cors'),
      db = require('./db'),
      routes = require('./routes');

app.use(cors("*"));
app.use('/api', routes);

module.exports = app;
