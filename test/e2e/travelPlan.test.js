describe('TravelPlan', function(){
    var alarm;

    beforeEach(function() {
      browser.get('/');
      travelLink = element(by.id('travelPlan'));
    });

    it('should load the Travel Plan page', function() {
      travelLink.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/tab/travelPlan');
      });
    });

    it('should contain a button for \'from\' station', function() {
      travelLink.click();
      fromList = element(by.id('fromStation'));
      expect(fromList.isPresent()).toBe(true);
    });

    it('should contain a button for \'from\' station', function() {
      travelLink.click();
      fromList = element(by.id('toStation'));
      expect(fromList.isPresent()).toBe(true);
    });

    // not working test - unable to click station list
    xit('should have a notification for an alarm', function() {
      travelLink.click();

      fromStation = element(by.id('fromStation'));
      fromStation.click();
      var fromSt = element(by.cssContainingText('h2','Turnpike Lane'));
      fromSt.click();

      toStation = element(by.id('toStation'));
      toStation.click();
      var toSt = element(by.xpath('.//*[.="Aldgate East"]'));
      toSt.click();

      arrivalTime = element(by.id('arrivalTime'));
      arrivalTime.click();

      var hour = element(by.model('bind.hour'));
      var minute = element(by.model('bind.minute'));
      hour.sendKeys('12');
      minute.sendKeys('00');
      okButton = element(by.buttonText('OK'));
      okButton.click();

      getTripButton = element(by.id('getTrip'));
      getTripButton.click();

      alarmSetText = element(by.id('alarmSetText'));
      expect($('alarmSetText').isDisplayed()).toBeTruthy();
    });
  });
