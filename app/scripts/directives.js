'use strict';

/* Directives */


/* angular seed app demo version directive */
angular.module('hoh.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
