'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  //beforeEach(angular.mock.module('mytodoGruntApp'));
  //expect(mytodoGruntApp.MainCtrl).toBeDefined();
  beforeEach(module('mytodoGruntApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  // Angular invokes service factories and controllers via injector
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have no items to start', function() {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function() {
    scope.TODO = 'First Todo Item';
    scope.addTODO();
    expect(scope.todos.length).toBe(1);
  });

  it('should add then remove an item from the list', function() {
    scope.TODO = 'First Todo Item';
    scope.addTODO();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

  //write unit tests for local storage persist


  //write unit tests for login and logout behavior


  //write integration test from end-to-end, performing a sequence of workflow 
  //verify the app state along the way
  //option 1: use Selenium or PhantomJS
  //option 2: use Grunt


  //Mocking HTTP Requests with $httpBackend
});
