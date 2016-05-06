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

    $scope.stationList = [
      'Aldgate', 'Aldgate East','Westminster'
    ];

    $scope.showList = function(){
      $scope.stationList = [
        'Aldgate', 'Aldgate East','Westminster'
      ];

      var listPopup = $ionicPopup.show({
        template: '<ion-list>                                '+
                  '  <ion-item ng-repeat="item in stationList"> '+
                  '    {{item}}                              '+
                  '  </ion-item>                             '+
                  '</ion-list>                               ',

        title: 'List',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
        ]
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

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
