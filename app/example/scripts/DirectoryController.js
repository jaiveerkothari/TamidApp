angular
  .module('example')
  .controller('DirectoryController', function($scope, supersonic) {
    $scope.teams = [
        {name:"Investment Fund"},
        {name:"Tech"},
        {name:"Consulting"},
        {name:"Executive Board"}
    ]
    supersonic.ui.views.current.whenVisible(function() {
        supersonic.ui.tabs.hide();
        $scope.$apply();
        
 });
    
});
