'use strict';

var todoApp = angular.module('App', []);

function mainController($scope, $http) {

  $scope.todoList = [
    {
      text: 'task test',
      isComplete: false,
    },
    {
      text: 'task complete',
      isComplete: true,
    },
  ];
  $scope.formData = {};

  $http.get('/api/todos')
    .success(function(data) {
      $scope.todos = data;
      console.log(data);
    }).error(function(data) {
      console.log('Error: ' + data);
    });

  $scope.addTodo = function() {
    var todo = {
      text: $scope.formData.text,
    };
    console.log(todo);

  };
  $scope.createTodo = function() {
    $http.post('/api/todos', $scope.formData)
      .success(function(data) {
        $scope.formData = {};
        $scope.todos = data;
        console.log(data);
      }).error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.deleteTodo = function(id) {
    $http.delete('/api/todos/' + id)
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      }).error(function(data) {
        console.log('Error: ' + data);
      });
  };

  $scope.completeTodo = function(id) {
    $http.post('/api/todos/' + id)
      .success(function(data) {
        $scope.todos = data;
      }).error(function(data) {
        console.log('Error: ' + data);
      });
  };
}