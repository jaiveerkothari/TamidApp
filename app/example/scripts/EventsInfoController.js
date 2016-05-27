angular
  .module('example')
  .controller('EventsInfoController', function($scope, supersonic) {
    $scope.events = [];
    $scope.eventName=null;
    supersonic.ui.views.current.whenVisible(function() {
        $scope.$apply();

 	});
 	supersonic.ui.views.current.params.onValue(function(event_name){
 	    supersonic.logger.log(event_name);
 	    $scope.eventName=event_name.id;
 	    if(event_name.id=="Town Hall"){
 	    	$scope.events = [
		        {info: "This is mandatory"}
    		]
 	    }
 	    if(event_name.id=="Tamixer"){
 	    	$scope.events = [
		        {info: "fun"}
    		]
 	    }
		if(event_name.id=="Gala"){
 	    	$scope.events = [
            {info: "partayyyy"}
    		]
 	    }
 	    $scope.$apply();
 	});

});
