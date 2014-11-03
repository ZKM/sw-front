'use strict';

/**
 * @ngdoc overview
 * @name swFrontApp
 * @description
 * # swFrontApp
 *
 * Main module of the application.
 */

var myApp = angular.module('swFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch']);

  myApp.controller('myNav', function($scope, $location) {
      $scope.isActive = function(route) {
          return route === $location.path();
      }
  });
  
  myApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })

      .when('/edges', {
        templateUrl: 'views/edges.html',
        controller: 'EdgesController'
      })

      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

