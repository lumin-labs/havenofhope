'use strict';

angular.module('hoh')
  .controller('MainCtrl', function ($scope, $location, $routeParams, langService, Pixel) {

  	console.log("RouteParams", $routeParams);

  	$scope.data = Pixel.data;

    langService.setDict($scope.language);
    // langService.setPage($scope.page);

    $scope.lang = langService.getDict();
    $scope.langDict = langService.getLangDict();

    // $scope.open = function(params){
	   //  angular.forEach(params, function(page, pageType){
	   //  	$scope[pageType] = page;
	   //  });
	   //  if(params.language){
    // 		langService.setDict(params.language);
	   //  }
    // };

  });
