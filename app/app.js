'use strict'

// if (typeof define !== 'function') {
//     var define = require('amdefine')(module);
// }

// setup configuration
var constants = require('configuration/index');
var config = angular.module('configuration', []);
for(name in constants) {
  config.constant(name, constants[name]);
}

require('common/index')
require('routes/index')
// require('testroutes')

angular.module("app", [
  "configuration",
  "ui.router",
  "ui.bootstrap",
  "ui.utils",
  "restangular",
  "ngProgressLite",
  "xeditable",
  "ajoslin.promise-tracker",
  // "ngNumeraljs"
  // "angularFileUpload"
  "ep:common",
  "ngAnimate",
 
  // routes
  "routes"
  // "testroutes"
]).
config(function($urlRouterProvider, $logProvider, RestangularProvider, API_ROOT, DEV){
  // setup Restangular
  RestangularProvider.setBaseUrl(API_ROOT);
  RestangularProvider.setRestangularFields({
    id: 'ID'
  });

  RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
    var newResponse;
    if(operation == 'getList') {
      newResponse = response.data;
      newResponse.meta = response.meta;
    }
    else
      newResponse = response.data;

    return newResponse;
  });

  RestangularProvider.setOnElemRestangularized(function(elem, isCollection, what, Restangular) {
    if(!isCollection)
      return elem;

    /**
     * find an item in a collection by id or other column
     * @param  {int} id
     * @param {string} column
     * @return {object|null}
     */
    elem.find = function(id, column) {
      if(!column)
        column = 'ID';
      
      for(var i=0; i<elem.length; ++i) {
        if(elem[i][column] == id)
          return elem[i];
      }

      return null;
    }

    /**
     * returns the index of a ID 
     * @param  {int} id
     * @return {int|false}
     */
    elem.indexOfID = function(id) {

      for(var i=0; i<elem.length; ++i) {
        if(elem[i].ID == id)
          return i;
      }

      return false;
    }

    return elem;
  });

  // Turn on logging (if this is a development environment)
  $logProvider.debugEnabled(DEV);
  
  // Set the default 404 url
  $urlRouterProvider
    .when('', '/')
    .otherwise("/not-found")
  return
})

// General HTTP request config
.run(function($rootScope, $http, promiseTracker){
  $http.defaults.withCredentials = true;
  if(typeof $rootScope.promiseTracker == 'undefined')
    $rootScope.promiseTracker = promiseTracker({ activationDelay: 500 });
})

// Angular x-editable config
.run(function(editableOptions, editableThemes) {
  // set `default` theme
  editableOptions.theme = 'default';
  
  // overwrite submit button template
  editableThemes['default'].submitTpl = '<button type="submit" class="btn">Save</button>';
  editableThemes['default'].cancelTpl = '<button type="button" class="btn" ng-click="$form.$cancel()">Cancel</button>';
})

// Progress bar
.config(function(ngProgressLiteProvider){
  ngProgressLiteProvider.settings.speed = 300;
})
.run(function($rootScope, $state, ngProgressLite) {
  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){

    // Make sure the other animations are done before firing a new progressbar
    ngProgressLite.done();

    ngProgressLite.start();
  });
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    ngProgressLite.done();
  });

  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams){
    ngProgressLite.done();
  });

});
