angular
  .module('example')
  .controller('TeamController', function($scope, supersonic) {
    $scope.persons = [];
    $scope.teamName="Team";
    supersonic.ui.views.current.whenVisible(function() {
        $scope.$apply();
        
 	});
 	supersonic.ui.views.current.params.onValue(function(team_name){
 	    supersonic.logger.log(team_name);
 	    $scope.teamName=team_name.id;
 	    if(team_name.id=="Tech"){
 	    	$scope.teamName="Tech";
 	    	$scope.persons = [
		        {name:"Isabel Benatar"},
		        {name:"David Wallach"},
		        {name:"Jonah Adler"},
		        {name:"Ben Kalish"}
    		]
 	    }
 	    if(team_name.id=="Investment Fund"){
 	    	$scope.teamName="Investment Fund";
 	    	$scope.persons = [
		        {name:"Max Zhuo"},
		        {name:"Noah Feil..."},

    		]
 	    }
		if(team_name.id=="Consulting"){
			$scope.teamName="Consulting";
 	    	$scope.persons = [
		        {name:"Aniket Lila"},
		        {name:"John Doe"}
		
    		]
 	    }
 	    if(team_name.id=="Executive Board"){
 	    	$scope.teamName="Executive Board";
 	    	$scope.persons = [
		        {name:"Naomi Gutstein"},
		        {name:"Darren Jacoby"},
		        {name:"Ben Weiss"}
		       
    		]
 	    } 	    
 	    $scope.$apply();
 	});
    
});
