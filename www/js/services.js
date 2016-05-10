angular.module('smartAlarm.services', [])

.factory('AlarmService', function($resource) {
  var alarm = '06:00';
  return alarm;
})

.factory('UserSession', function($resource) {
  return $resource("/api/user");
})

.factory('WeatherApi', function($resourcce) {
  return $resource("weather_api");
})

.factory('SignUp', function($resource) {
  return function (details) {
    return $resource("/api/user/signup", [{"signUp":{method: "post"}, "params": details }]);
  };
})

.factory('NotificationScheduler', function($cordovaLocalNotification){

  var add = function(alarmTime) {
    $cordovaLocalNotification.add({
        id: "1234",
        date: alarmTime,
        message: "Get out of bed",
        title: "Time to Wake up",
        autoCancel: true,
        sound: null
    }).then(function () {
        console.log("The notification has been set");
    });
  };
  return add;
})

.service('StationList', function($http) {
  return $http.get('/stations');
})

.service('CurrentWeather', function($http) {
  return $http.get('/api/weather');
})

.service('GetTrip', function($http) {
  return function (tripDetails) {
      return $http({
        method: 'POST',
        url: '/alarms',
        contentType: 'application/json',
        data: tripDetails
      });
  };
});
