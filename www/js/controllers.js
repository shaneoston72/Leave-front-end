angular.module('smartAlarm.controllers', [])

.controller('LoginCtrl', function($scope, $location, $ionicPopup, $rootScope) {
  $scope.data = {};

  $scope.login = function() {
    var user_session = new UserSession({ user: $scope.data });
    user_session.$save(
      function(data) {
        window.localStorage['userId'] = data.id;
        window.localStorage['userName'] = data.name;
        $location.path('/tab/dashboard');
      },
      function(err){
        var error = err["data"]["error"] || err.data.join('. ')
        var con
      }
    )
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
