angular
  .module('example')
  .controller('EventsController', function($scope, supersonic) {
    $scope.events = [
        {name:"Town Hall", date:"May 25th", location:"Tech A111"},
        {name:"Tamixer", date:"May 27th", location:"E2"},
        {name:"Gala", date:"May 31st", location:"Norris Loius Room"}
    ]
    supersonic.ui.views.current.whenVisible(function() {
        $scope.$apply();
        
 });
    
});
