'use strict';

var angular;

var todoApp = angular.module('App', []); // eslint-disable-line no-unused-vars

function mainController($scope, $http) { // eslint-disable-line no-unused-vars

  $scope.todoList = [];
  $scope.doneList = [];
  $scope.formData = {};
  $scope.searchString = '';

  $scope.addTodo = function() {
    if (undefined === $scope.formData.text){
      return;
    }
    var todo = {
      text: $scope.formData.text,
    };
    $scope.todoList.push(todo);
    $scope.formData = {};
    console.log(todo);
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
