angular
  .module('example')
  .controller('HomeController', function($scope, supersonic) {
    
    supersonic.ui.views.current.whenVisible(function() {
        supersonic.ui.tabs.hide();
        $scope.$apply();
        
 });
    
});
