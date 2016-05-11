angular.module('smartAlarm.controllers', [])

.controller('DashboardCtrl', function($scope) {

})

.controller('WeatherCtrl', function($scope, CurrentWeather) {
  CurrentWeather.success(function(data){
    $scope.description = data.description;
    $scope.temperature = data.temperature;
  });
})

.controller('TravelPlanCtrl', function ($scope, $cordovaLocalNotification, NotificationScheduler, StationList, GetTrip, $http, $rootScope) {

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
        $rootScope.timeToLeave = data.time_to_leave;
        $rootScope.alarmMessage ="Your alarm has been set for " + $rootScope.timeToLeave;
        $rootScope.dashboardMessage = "LEAVE at " + $rootScope.timeToLeave;
        console.log($rootScope.alarmMessage);
        var hours = parseInt(data.time_to_leave.substr(0,2));
        var minutes = parseInt(data.time_to_leave.substr(3,4));
        var alarmTime = new Date();
        alarmTime.setHours(hours, minutes);
        console.log("controller", alarmTime);
        new NotificationScheduler(alarmTime);
      });
      // console.log('im here', data);
      // var hours = parseInt(data.time_to_leave.subsr(0,2));
      // var minutes = parseInt(data.time_to_leave.subsr(3,4));
      // var alarmTime = new Date();
      // alarmTime.setHours(hours, minutes);
      // console.log(alarmTime);
      // new NotificationScheduler(alarmTime);
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

.controller("ExampleController", function($scope, $cordovaLocalNotification, NotificationScheduler) {
  //
  // var alarmTime = new Date();
  // alarmTime.setMinutes(alarmTime.getMinutes() + 1);

    $scope.add = function(hours, minutes) {
      var alarmTime = new Date();
      alarmTime.setHours(hours, minutes);
      console.log(alarmTime);
      new NotificationScheduler(alarmTime);
    };
    $scope.isScheduled = function() {
        $cordovaLocalNotification.isScheduled("1234").then(function(isScheduled) {
            alert("Notification 1234 Scheduled: " + isScheduled);
        });
    };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
