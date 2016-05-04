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
});
