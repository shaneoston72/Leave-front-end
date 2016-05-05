describe('LoginCtrl', function() {

  var logInCtrl,
      deferredLogin,
      userSessionMock,
      locationMock,
      ionicPopupMock,
      scope;

  beforeEach(module('smartAlarm'));

  beforeEach(inject(function($controller, $q, $rootScope){
    deferredLogin = $q.defer();

    userSessionMock = {
      login: jasmine.createSpy('login spy')
                    .and.returnValue(deferredLogin.promise)
    };

    locationMock = jasmine.createSpyObj('$location spy', ['path']);

    ionicPopupMock = jasmine.createSpyObj('$ionicPopup spy', ['alert']);

    scope = $rootScope.$new();

    logInCtrl = $controller('LoginCtrl', {
      $scope: scope,
      $location: locationMock,
      $ionicPopup: ionicPopupMock,
      UserSession: userSessionMock,
    });

  }));

  describe('#doLogin', function(){

    beforeEach(inject(function(){
      scope.email = 'test@gmail.com';
      scope.password = 'password1';
      scope.login();
    }));

  //   it("should have a $scope variable", function() {
  //     expect($scope).toBeDefined();
  // });

    // it('should call login on UserSession', function(){
    //   expect(userSessionMock.login).toHaveBeenCalledWith('test@gmail.com', 'password1');
    // });

    describe('when the login is executed,', function(){
      it('if successful, should change state to dashboard', function(){

        // TODO: Mock the login response from DinnerService

        expect(locationMock.path).toHaveBeenCalledWith('/tab/dashboard');
      });
      it('if unsuccessful, should show a popup', function(){

        // TODO: Mock the login response from DinnerService

        expect(ionicPopupMock.alert).toHaveBeenCalled();
      });
    });
  });
});
