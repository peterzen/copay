'use strict';
 
describe('sidebarController tests', function(){
  var scope, controller, profileService;              

  beforeEach(function() {
      angular.mock.module('copayApp.controllers');
      angular.mock.module('stateMock');
      angular.mock.module('ngLodash');
      angular.mock.module('copayApp.services');
      angular.mock.module('bwcModule');
      angular.mock.module('gettext');
      angular.mock.module('angularMoment');
  });

  beforeEach(
      angular.mock.inject(function($rootScope, $controller, _profileService_) {
        profileService = _profileService_;
        scope = $rootScope.$new();
        controller = $controller('sidebarController', {
            $scope: scope,
            profileService: profileService
        });
      })
  );

  it('wallet selection', function() {
    expect(controller).toBeDefined();
    expect(controller.walletSelection).toBe(false);
  });

  it('is able to switch wallets via the profile service.', function(){
     spyOn(profileService, 'setAndStoreFocus');
     var currentWalletId = '00000000-0000-0000-0000-000000000001';
     var newWalletId = '00000000-0000-0000-0000-000000000002';

     controller.switchWallet(newWalletId, currentWalletId);

     expect(profileService.setAndStoreFocus).toHaveBeenCalled();
     expect(profileService.setAndStoreFocus)
        .toHaveBeenCalledWith(newWalletId, jasmine.any(Function));    
  });

  it('does not switch wallets when the new wallet is already the current wallet', 
     function() {
        spyOn(profileService, 'setAndStoreFocus');
        var currentWalletId = '00000000-0000-0000-0000-000000000001';

        controller.switchWallet(currentWalletId, currentWalletId);

        expect(profileService.setAndStoreFocus).not.toHaveBeenCalled(); 
    }
  );
});