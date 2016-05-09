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

.controller('TravelPlanCtrl', function ($scope, ionicTimePicker, $ionicModal, StationList) {

  StationList.success(function(data) {
    $scope.stationNames = data;
  });

  $scope.openTimePicker = function () {
    var ipObj = {
      callback: function (val) {
        if (typeof (val) === 'undefined') {
          console.log('Time not selected');
        } else {
          var selectedTime = new Date(val * 1000);
          console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
        }
      },
      inputTime: 50400,
      format: 24,
      setLabel: 'Set'
    };
    ionicTimePicker.openTimePicker(ipObj);
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

  var alarmTime = new Date();
  alarmTime.setMinutes(alarmTime.getMinutes() + 1);

  new NotificationScheduler(alarmTime);

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
