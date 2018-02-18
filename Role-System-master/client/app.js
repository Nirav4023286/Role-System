var myapp=angular.module('myapp',['ui.bootstrap','checklist-model','ngRoute','ngStorage', 'ngCookies']);
myapp.config(function($routeProvider,$locationProvider) {
  $locationProvider.hashPrefix('');
    $routeProvider.when('/roles', {
        templateUrl: './views/roles.html',
        controller: 'rolesController',
        controllerAs:'rolesController'
    }).when('/saveData',{
      templateUrl: './views/saveData.html',
      controller: 'saveDataController',
      controllerAs:'saveDataController'
    });
});
