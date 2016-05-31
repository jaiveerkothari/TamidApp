angular
  .module('example')
  .controller('EventsInfoController', function($scope, supersonic) {
    $scope.events = [];
    $scope.eventName=null;
    supersonic.ui.views.current.whenVisible(function() {
        supersonic.ui.tabs.hide();
        $scope.$apply();

 	});
 	supersonic.ui.views.current.params.onValue(function(event_name){
 	    supersonic.logger.log(event_name);
 	    $scope.eventName=event_name.id;
 	    if(event_name.id=="Town Hall"){
 	    	$scope.events = [
		        {info: "infooo"}
    		]
 	    }
 	    if(event_name.id=="Tamixer"){
 	    	$scope.events = [
		        {info: "fun"}
    		]
 	    }
		if(event_name.id=="Gala"){
 	    	$scope.events = [
            {info: "The end of the year Tamid Gala. All groups will be presenting on the work they have done this year. Fund will be doing stock pitches, followed by a demo from Tech and then project updates from Consulting. Food will be provided."}
    		]
 	    }
 	    $scope.$apply();
 	});

});
