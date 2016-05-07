angular.module('smartAlarm.services', [])

.factory('AlarmService', function($resource) {
  var alarm = '06:00';
  return alarm;
})

.factory('UserSession', function($resource) {
  return $resource('/api/user');
})

// .factory('StationList', function($resource) {
//   return $resource('/api/stations').then(function(response) {
//     return response.data;
//   });
// });

.factory('StationList', function($http) {

  var getApiData = function() {
    return $http.get('/api/stations')
      .success(function(response) {
        // console.log('Got some data: ', response);
        return response;
      }).then(function(response) {
        console.log(response.data);
        return response.data;
      });
    };
    console.log(getApiData());
    return getApiData;
});
