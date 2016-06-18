var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var mongoose = require('mongoose');

import graphqlHTTP from 'express-graphql';
import schema from './server/schema';


mongoose.connect('mongodb://localhost/todos');

var app = new (require('express'))();
var port = 8000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use('/graphiql', express.static(__dirname + '/server/graphiql'));

app.use('/graphql', (req, res) => {
  graphqlHTTP(() => ({schema: schema})) (req, res);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info("Listening on port %s.", port)
  }
});