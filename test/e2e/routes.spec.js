'use strict';

var app = require('app');

console.log("routes.spec loaded");
describe ('checking routes', function(){

  beforeEach(function() {
    browser().navigateTo('#/');
  });

  it('should', function() {
    browser().navigateTo('#/');
    expect(browser().location().path()).toBe("#/");
  });

});