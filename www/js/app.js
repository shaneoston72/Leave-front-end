angular.module('smartAlarm', ['ionic', 'smartAlarm.controllers', 'smartAlarm.services', 'ngResource', 'ionic-timepicker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function (ionicTimePickerProvider) {
  var timePickerObj = {
    inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
    format: 24,
    step: 5,
    setLabel: 'Set',
    closeLabel: 'Close'
  };
  ionicTimePickerProvider.configTimePicker(timePickerObj);
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  $httpProvider.defaults.withCredentials = true;

  $stateProvider

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('tab.dashboard', {
    url: '/dashboard',
    views: {
      'tab-dashboard': {
        templateUrl: 'templates/tab-dashboard.html',
        controller: 'DashboardCtrl'
      }
    }
  })

  .state('tab.destination', {
    url: '/destTime',
    views: {
      'tab-destination': {
        templateUrl: 'templates/tab-destination.html',
        controller: 'DestinationTimeCtrl'
      }
    }
  })

  // .state('tab.alarm', {
  //   url: '/alarm',
  //   views: {
  //     'tab-alarm': {
  //       templateUrl: 'templates/tab-alarm.html',
  //       controller: 'AlarmCtrl'
  //     }
  //   }
  // })

  .state('tab.weather', {
    url: '/weather',
    views: {
      'tab-weather': {
        templateUrl: 'templates/tab-weather.html'      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/login');

});
