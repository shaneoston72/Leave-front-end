angular.module('smartAlarm.controllers', [])

.controller('LoginCtrl', function($scope, $location, UserSession, $ionicPopup, $rootScope) {
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
        var confirmPopup = $ionicPopup.alert({
          title: 'An error occured',
          template: error
        });
      }
    );
  };
  $scope.redirect = function() {
    $location.path('/signup');
  };
})

.controller('DashboardCtrl', function($scope) {

})

.controller('WeatherCtrl', function($scope, CurrentWeather) {
  CurrentWeather.success(function(data){
    $scope.description = data.description;
    $scope.temperature = data.temperature;
  });
})

.controller('TravelPlanCtrl', function ($scope, StationList, GetTrip, $http) {

  StationList.success(function(data) {
    $scope.stationNames = data;
  });


  $scope.getTime = function(trip) {
    var newTime     = trip.time.toString().substr(16, 5);

    var tripDetails = {'alarm':
                      { 'from_station': trip.fromStation.ICS_Code,
                        'to_station': trip.toStation.ICS_Code,
                        'arrival_time': newTime,
                        'alarm_offset': '0'
                      }
                    };

    GetTrip(tripDetails).success(function(data) {
      return $http({
        method: 'GET',
        url: '/alarms',
        contentType: 'application/json'
      }).success(function(data){
        console.log(data);
      });
    });
  };
})

.controller('SignupCtrl', function($scope, $state, SignUp, $location) {
  $scope.signUp = function(email, password) {
    var details = { 'email' : email,
                    'password': password };
    new SignUp(details);
    $location.path('/tab/login');
  };


})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
