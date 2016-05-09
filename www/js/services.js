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

.service('StationList', function($http) {
  return $http.get('/api/stations');
});
