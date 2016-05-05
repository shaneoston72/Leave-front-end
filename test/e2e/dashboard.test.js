describe('Dashboard', function() {

  beforeEach(function() {
    browser.get('/#/tab/dashboard');
  });

  it('shows a current alarm', function() {
    var alarm = element(by.id('alarm'));
    expect(alarm.isPresent()).toBe(true);
  });

  it('shows a current weather', function() {
    var weather = element(by.id('weather'));
    expect(weather.isPresent()).toBe(true);
  });

  it('shows a current Route', function() {
    var destination = element(by.id('destination'));
    expect(destination.isPresent()).toBe(true);
  });

  it('takes users to alarm page', function() {
    var alarm = element(by.id('alarm'));
    alarm.click().then(function() {
      expect(browser.getLocationAbsUrl()).toMatch('/tab/alarm');
    });
  });

  it('takes users to weather page', function() {
    var weather = element(by.id('weather'));
    weather.click().then(function() {
      expect(browser.getLocationAbsUrl()).toMatch('/tab/weather');
    });
  });

  it('takes users to destination page', function() {
    var destination = element(by.id('destination'));
    destination.click().then(function() {
      expect(browser.getLocationAbsUrl()).toMatch('/tab/destination');
    });
  });
});
