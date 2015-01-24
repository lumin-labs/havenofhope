'use strict';

angular.module('hoh', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ui.bootstrap.transition',
  'hoh.filters', 
  'hoh.services', 
  'hoh.directives',
  // 'hoh.controllers'
])
  // .config(function ($routeProvider) {
  //   $routeProvider.when('/:lang/home', {templateUrl: 'views/home.html',
  //                                 controller: 'Main'});

  //   $routeProvider.when('/:lang/about', {templateUrl: 'views/about.html',
  //                                 controller: 'Main'});

  //   $routeProvider.when('/:lang/contact', {templateUrl: 'views/contact.html',
  //                                 controller: 'Main'});

  //   $routeProvider.when('/:lang/donate', {templateUrl: 'views/donate.html',
  //                                 controller: 'Main'});

  //   $routeProvider.when('/:lang/publications', {templateUrl: 'views/publications.html',
  //                                 controller: 'Main'});

  //   $routeProvider.otherwise({redirectTo: '/en/home'});
// =======
//   'ui.bootstrap.transition'
// ])
  .config(function ($routeProvider) {
    $routeProvider.when('/:lang/:page/:subPage', { 
      templateUrl: 'views/pixel.html',
      controller: 'PixelCtrl' });

    $routeProvider.otherwise({redirectTo: '/en/home/h'});
// >>>>>>> 24c64ddf38ce0bd044a780bb58153e05bba8baa8
  });