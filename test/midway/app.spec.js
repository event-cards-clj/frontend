'use strict';

var app = require('app');

describe ("Midway app spec", function() {

  describe('App Module: ', function () {

    var module;
    before(function() {
      module = angular.module('app');
    });

    it('should be registered', function() {
      expect(module).not.to.equal(null);
    });

  });

});