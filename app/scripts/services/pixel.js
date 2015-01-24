'use strict';

angular.module('hoh')
  .service('Pixel', function Pixel() {
    var self = {data:{}};
    self.data.date = new Date();
    self.data.page = "";
    self.data.subPage = "";
    self.data.lang = "";
    return self;
  });
