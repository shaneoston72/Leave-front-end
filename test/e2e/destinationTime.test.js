describe('DestinationTime', function(){
    var alarm;

    beforeEach(function() {
      browser.get('/#/login');
      email = element(by.model('data.email'));
      password = element(by.model('data.password'));
      loginButton = element(by.id('login'));
      destLink = element(by.id('destTime'));
    });

    it('should load the Destination page', function() {
      email.sendKeys('shane@shaneoston.com');
      password.sendKeys('test1234');
      loginButton.click();
      destLink.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/tab/destTime');
      });
    });

    it('should contain a popup list of departure station', function() {
      fromList = element(by.id('fromList'));
      expect(fromList.isPresent()).toBe(true);
    });

  });
