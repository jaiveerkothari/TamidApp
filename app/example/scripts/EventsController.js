angular
  .module('example')
  .controller('EventsController', function($scope, supersonic) {
    $scope.events = [
        {name:"Town Hall", date:"May 25th"},
        {name:"Tamixer", date:"May 27th"},
        {name:"Gala", date:"May 31st"}
    ]
    supersonic.ui.views.current.whenVisible(function() {
        $scope.$apply();

 });

});
