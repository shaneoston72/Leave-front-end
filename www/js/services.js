angular.module('smartAlarm.services', [])

.factory('AlarmService', function($resource) {
  var alarm = '06:00';
  return alarm;
})

.factory('UserSession', function($resource) {
  return $resource("http://localhost:3000/users/sign_in.json");
});
