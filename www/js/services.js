angular.module('smartAlarm.services', [])

.factory('AlarmService', function($resource) {
  var alarm = '06:00';
  return alarm;
});
