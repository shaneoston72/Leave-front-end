describe('DashCtrl', function() {

  beforeEach(module('smartAlarm'));

  var controller;

  beforeEach(inject(function($controller){
    controller = $controller('DashCtrl');
  }));

  it('shows controller', function() {
    console.log(controller);
    expect(controller).toBeTruthy();
  });
});
