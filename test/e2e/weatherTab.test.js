describe('WeatherTab', function(){

    beforeEach(function() {
      browser.get('/#/tab/weather');
    });

    it('should display current weather', function() {
      var weatherTitle = element(by.id('weatherTitle'));
      var currentWeather = element(by.id('currentWeather'));
      var weatherDesc = element(by.id('weatherDesc'));
      var weatherTemp = element(by.id('weatherTemp'));
      expect(weatherTitle.isPresent()).toBe(true);
      expect(currentWeather.isPresent()).toBe(true);
      expect(weatherDesc.isPresent()).toBe(true);
      expect(weatherTemp.isPresent()).toBe(true);
    });
  });
