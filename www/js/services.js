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

.factory('NotificationScheduler', function(alarmTime, $cordovaLocalNotification){

  var add = function(alarmTime) {
    $cordovaLocalNotification.add({
        id: "1234",
        date: alarmTime,
        message: "This is a message",
        title: "This is a title",
        autoCancel: true,
        sound: null
    }).then(function () {
        console.log("The notification has been set");
    });
  };
  return add;
})

.service('StationList', function($http) {
  return $http.get('/api/stations');
})

.service('CurrentWeather', function($http) {
  return $http.get('/api/weather');
});
