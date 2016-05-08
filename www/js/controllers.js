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
      }//,
      // function(err){
      //   var error = err["data"]["error"] || err.data.join('. ')
      //   var confirmPopup = $ionicPopup.alert({
      //     title: 'An error occured',
      //     template: error
      //   });
      // }
    );
  };
})

.controller('DashboardCtrl', function($scope) {

})

.controller('DestinationTimeCtrl', function ($scope, ionicTimePicker, $ionicPopup) {

  $scope.destPopup = function () {
    $ionicPopup.prompt({
      title: "title",
      inputType: 'confirm'
    }).then(function(){

    });
  };

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

.controller('SignupCtrl', function($scope, $state, SignUp) {
  $scope.signUp = function(email, password) {
    var details = { 'email' : email,
                    'password': password };
    new SignUp(details);
  };

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
