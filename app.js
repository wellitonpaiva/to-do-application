'use strict';

var todoApp = angular.module('App', []);

function mainController($scope, $http) {

  $scope.todoList = [];
  $scope.doneList = [];
  $scope.formData = {};
  $scope.searchString = '';

  $scope.addTodo = function() {
    var todo = {
      text: $scope.formData.text,
    };
    $scope.todoList.push(todo);
    $scope.formData = {};
  };

  $scope.removeTodo = function(todo) {
    $scope.todoList.splice($scope.todoList.indexOf(todo), 1);
  };

  $scope.removeCompletedTodo = function(todo) {
    $scope.doneList.splice($scope.doneList.indexOf(todo), 1);
  };

  $scope.completeTodo = function(todo) {
    $scope.todoList.splice($scope.todoList.indexOf(todo), 1);
    $scope.doneList.push(todo);
  };
}
