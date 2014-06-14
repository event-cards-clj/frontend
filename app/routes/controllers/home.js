/**
 * Home controller
 */

module.exports = function ($scope, $log) {

  $scope.editing = false;

  $scope.edit = function() {
    $scope.editing = !$scope.editing;
  }

  $scope.save = function() {
    $scope.editing = false;
  }

  $scope.person = {
    firstName: 'Matthew',
    lastName: 'Davies',
    email: 'daviesgeek@icloud.com',
    homepage: 'offblockfilms.com',
    twitter: 'daviesgeek',
    username: 'daviesgeek',
    comments: 'These are some comments here, just so that the comments box isn\'t empty'
  }
}