angular.module('smartAlarm.controllers', [])

.controller('LoginCtrl', function($scope, $location, $ionicPopup, $rootScope) {
  $scope.data = {};

  $scope.login = function() {
    $location.path('/tab/dashboard');
  };
})

.controller('DashboardCtrl', function($scope) {

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
