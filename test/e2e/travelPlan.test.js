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

  });
