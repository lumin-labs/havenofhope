'use strict';

describe('Controller: PixelCtrl', function () {

  // load the controller's module
  beforeEach(module('templatesApp'));

  var PixelCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PixelCtrl = $controller('PixelCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
