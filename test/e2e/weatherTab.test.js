describe('WeatherTab', function(){

    beforeEach(function() {
      browser.get('/#/tab/weather');
    });

    fit('should display current weather', function() {
      var weatherTitle = element(by.id('weatherTitle'));
      var currentWeather = element(by.id('currentWeather'));
      expect(weatherTitle.isPresent()).toBe(true);
      expect(currentWeather.isPresent()).toBe(true);
      expect(currentWeather.textContent()).toBeDefined();
    });
  });
