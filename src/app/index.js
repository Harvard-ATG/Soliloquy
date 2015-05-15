'use strict';

angular.module('soliloquy', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/course', {
        templateUrl: 'app/course/course.html',
        controller: 'CourseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
