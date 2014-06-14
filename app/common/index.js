/**
 * Common/index.js
 * This is where all the services, resources, directives, etc, are included
 */

angular
  .module('ep:common',[])
  .config(function($httpProvider){
    var interceptor = ['$rootScope', '$location', '$q', '$injector', 'API_ROOT', 'promiseTracker', function($rootScope, $location, $q, $injector, API_ROOT, promiseTracker) {
      return{
        'request': function(config){

          if(typeof $rootScope.promises == 'undefined')
            $rootScope.promises = [];

          if(typeof $rootScope.deferred == 'undefined')
            $rootScope.deferred = [];

          var deferred = $q.defer();
          $rootScope.deferred.push(deferred);
          $rootScope.promiseTracker = promiseTracker();
          $rootScope.promiseTracker.addPromise(deferred.promise);

          return config;
        },

        'response': function(response){

          $rootScope.deferred.splice(0, 1)[0].resolve();

          return response;
        },

        'responseError': function(response){

          //if the code is a 422 (unprocessable entity) return the data and let the form handle it
          if('code' in response.data.status && response.data.status.code == '422')
            return $q.reject(response);

          $rootScope.areErrors = true;
          $rootScope.error = response.data;
          $rootScope.error.currentState = $injector.get('$state').current;
          return $q.reject(response);
        }
      }
    }];

    $httpProvider.interceptors.push(interceptor);


    // var $http,
    //     requestInterceptor = ['$q', '$injector', 'promiseTracker', '$rootScope', function ($q, $injector, promiseTracker, $rootScope) {
    //         var error;

    //         function success(promise) {
    //           console.log('promise resolved');
    //           return promise;
    //         };

    //         function error(promise) {
    //           return $q.reject(promise);
    //         };

    //         return function (promise) {
    //           console.log('adding promise');
    //           $rootScope.promiseTracker.addPromise(promise);

    //           return promise.then(success, error);
    //         }
    //     }];

    // $httpProvider.responseInterceptors.push(requestInterceptor);


    // $httpProvider.resposne

    // $httpProvider.interceptors.push(function(interceptor) {
    //   console.log(interceptor)
    //   return {
    //    'request': function(config) {
    //        // var $root = angular.element("#view").scope();
    //        // $root.globalMessage = false;
    //        // $root.networkActive = {title:'One moment...'}
    //        return config;
    //     },
     
    //     'response': function(response) {
    //        // var $root = angular.element("#view").scope();
    //        // $root.networkActive = false;
    //        return response;
    //     },
    //     'responseError': httpInterceptor.responseError
    //   };
    // });
  })