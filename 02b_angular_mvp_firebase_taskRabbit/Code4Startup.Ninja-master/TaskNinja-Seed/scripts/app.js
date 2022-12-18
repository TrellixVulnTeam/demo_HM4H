'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',// NEW
    'ngResource',
    'ngRoute',    
    'firebase'
  ])
  .constant('FURL', 'https://your-firebase.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'        
      })
      .otherwise({
        redirectTo: '/'
      });
  });