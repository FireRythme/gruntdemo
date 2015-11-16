'use strict';

/**
 * @ngdoc function
 * @name mytodoGruntApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoGruntApp
 */
angular.module('mytodoGruntApp')
  //Factory Methods
  .factory('serviceId', ['service-description', function(service-description) {}])
  .directive('directiveName', ['directive-description'], function(directive-description) {})
  .filter('filterName', ['filter-description', function() {}])
  //Module Methods are declared in app.js

  //Controllers, providing the application behavior
  .controller('MainCtrl', function ($scope, localStorageService) {
    /*
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    */
    //$scope.todos = ['item 1', 'item 2', 'item 3'];
    //$scope.todos = [];
    //read todos from local storage and use $watch listener to sync on list change
    var todosInLocalStorage = localStorageService.get('todos');
    $scope.todos = todosInLocalStorage || [];
    $scope.$watch('todos', function() {
    	localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTODO = function() {
    	//add error checking, duplicate checking here
    	$scope.todos.push($scope.TODO);
    	$scope.TODO = '';
    };
    $scope.removeTodo = function (index) {
    	$scope.todos.splice(index, 1);
    };
  });
