describe('TravelPlan', function(){
    var alarm;

    beforeEach(function() {
      browser.get('/#/login');
      email = element(by.model('data.email'));
      password = element(by.model('data.password'));
      loginButton = element(by.id('login'));
      travelLink = element(by.id('travelPlan'));
    });

    it('should load the Travel Plan page', function() {
      email.sendKeys('shane@shaneoston.com');
      password.sendKeys('test1234');
      loginButton.click();
      travelLink.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/tab/travelPlan');
      });
    });

    it('should contain a button for \'from\' station', function() {
      email.sendKeys('shane@shaneoston.com');
      password.sendKeys('test1234');
      loginButton.click();
      travelLink.click();
      fromList = element(by.id('fromList'));
      expect(fromList.isPresent()).toBe(true);
    });

  });
