describe('Alarm', function() {

  beforeEach(module('smartAlarm'));

  beforeEach(inject(function($controller, $q){
    deferredLogin = $q.defer();
    testController = $controller('ExampleController');
  }));

  describe('add', function() {

    it('calls on the NotificationScheduler factory', function () {
      spyOn(testController, "service");
      testController.add();
      expect(testController.service).toHaveBeenCalled()
    });

  });
});
