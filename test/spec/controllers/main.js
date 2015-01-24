'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module

  beforeEach(module('havenofhopeApp'));

  beforeEach(module('templatesApp'));
// >>>>>>> 24c64ddf38ce0bd044a780bb58153e05bba8baa8

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
