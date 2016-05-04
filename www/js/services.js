angular.module('smartAlarm.services', [])

.factory('AlarmService', function($resource) {
  var alarm = '06:00';
  return alarm;
})

.factory('UserSession', function($resource) {
  //TODO: add user session logic (api call)
});
