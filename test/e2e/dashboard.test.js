describe('Dashboard', function() {

  beforeEach(function() {
    browser.get('/#/tab/dashboard');
  });

  it('has a link to Travel Plan', function() {
    var destination = element(by.id('travelPlan'));
    expect(destination.isPresent()).toBe(true);
  });

  it('shows a current weather', function() {
    var weather = element(by.id('weather'));
    expect(weather.isPresent()).toBe(true);
  });

  it('should display current weather', function() {
    var currentWeather = element(by.id('currentWeather'));
    var weatherDesc = element(by.id('weatherDesc'));
    var weatherTemp = element(by.id('weatherTemp'));
    expect(currentWeather.isPresent()).toBe(true);
    expect(weatherDesc.isPresent()).toBe(true);
    expect(weatherTemp.isPresent()).toBe(true);
  });

  it('shows a current alarm', function() {
    var weather = element(by.id('alarm'));
    expect(weather.isPresent()).toBe(true);
  });

});
