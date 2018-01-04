'use strict';

/**
 * @ngdoc overview
 * @name shuapiaoBackWebApp
 * @description
 * # shuapiaoBackWebApp
 *
 * Main module of the application.
 */

var labsystem = angular.module('BackWebApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ui.router',
    'smart-table',
    'ngFileUpload',
    'ui.bootstrap'
]);
labsystem.config(function($httpProvider) {
  $httpProvider.interceptors.push('myInterceptor');
  $httpProvider.defaults.withCredentials = true;
});
labsystem.value('baseURL', 'http://100.64.208.218:8080/labsystem');

labsystem.controller('MainCtrl', function ($state) {
  $state.go('app.test');

});


labsystem.config(function ($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise("/user/");
  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: 'views/main.html'
    })


    .state('login', {
      url:'/login',
      templateUrl : 'views/login.html',
      controller: 'LoginCtrl'
    })

    .state('app.test', {
      url: 'test/:id',
          templateUrl: 'views/test.html',
          controller: 'TestCtrl'
    })

});
