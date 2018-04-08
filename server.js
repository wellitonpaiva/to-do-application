'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

/* mongoose.connect('mongodb+srv://user:' +
  'tdy8Bch0llJrm9ao@cluster0-nbz6s.mongodb.net/test'); */

mongoose.connect('mongodb://user:tdy8Bch0llJrm9ao' +
  '@cluster0-shard-00-00-nbz6s.mongodb.net:27017,' +
  'cluster0-shard-00-01-nbz6s.mongodb.net:27017,' +
  'cluster0-shard-00-02-nbz6s.mongodb.net:27017/test?' +
  'ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

app.use(express.static(__dirname));
app.use(morgan('dev'));
app.unsubscribe(bodyParser.urlencoded({extended: 'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride());

app.listen(8080);

// model
var Todo = mongoose.model('todo', {
  text: String,
  isComplete: Boolean,
});

// routes
app.get('/api/todos', function(req, res) {

  Todo.find(function(err, todos) {

    if (err)
      res.send(err);

    res.json(todos);
  });
});

app.post('/api/todos', function(req, res) {

  Todo.create({
    text: req.body.text,
    isComplete: false,
    done: false,
  }, function(err, todo) {
    if (err)
      res.send(err);

    Todo.find(function(err, todos) {
      if (err)
        res.send(err);
      res.json(todos);
    });
  });
});

app.post('/api/todos/:todo_id', function(req, res) {
  var query = {_id: req.params.todo_id};
  var update = {isComplete: true};
  Todo.update(query, update,
    function(err, todo) {
      if (err)
        res.send(err);

      Todo.find(function(err, todos) {
        if (err)
          res.send(err);
        res.json(todos);
      });
    });
});

app.delete('/api/todos/:todo_id', function(req, res) {
  Todo.remove({
    _id: req.params.todo_id,
  }, function(err, todo) {
    if (err)
      res.send(err);

    Todo.find(function(err, todos) {
      if (err)
        res.send(err);
      res.json(todos);
    });
  });
});

app.get('*', function(req, res) {
  res.sendfile('./index.html');
});
