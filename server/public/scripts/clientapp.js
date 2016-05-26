var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/squirtle', {
      templateUrl: '/views/squirtle.html',
      controller: "SquirtleController"
    })
    .when('/mugen', {
      templateUrl: '/views/mugen.html',
      controller: "MugenController"
    })
    .when('/duke', {
      templateUrl: '/views/duke.html',
      controller: "DukeController"
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
