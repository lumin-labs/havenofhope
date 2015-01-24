'use strict';

angular.module('hoh')
  .controller('PixelCtrl', function ($scope, $location, $anchorScroll, $routeParams, Pixel, langService) {
    console.log("PIXEL: routeParams", $routeParams);
    Pixel.data.page = $routeParams.page;
    Pixel.data.subPage = $routeParams.subPage;
    Pixel.data.lang = $routeParams.lang;
    langService.setDict($routeParams.lang);
    // $location.hash('top');
    $anchorScroll();
  });
