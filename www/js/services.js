angular.module('smartAlarm.services', [])

.factory('AlarmService', function($resource) {
  var alarm = '06:00';
  return alarm;
})

.factory('UserSession', function($resource) {
  return $resource('/api/user');
})

.service('StationList', function($http) {
  return $http.get('/api/stations');
})

.service('CurrentWeather', function($http) {
  return $http.get('/api/weather');
});
