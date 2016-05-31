angular
  .module('example')
  .controller('TeamController', function($scope, supersonic) {
    $scope.persons = [];
    $scope.teamName="Team";
    supersonic.ui.views.current.whenVisible(function() {
    	supersonic.ui.tabs.hide();
        $scope.$apply();

 	});

    

 	supersonic.ui.views.current.params.onValue(function(team_name){

 		supersonic.ui.navigationBar.update({
      		title: team_name.id
      		
    	}).then(
    	supersonic.ui.navigationBar.show()

    	);

 	    supersonic.logger.log(team_name);
 	    $scope.teamName=team_name.id;
 	    if(team_name.id=="Tech"){
 	    	$scope.teamName="Tech";
 	    	$scope.persons = [
		        {name:"Isabel Benatar",
                    email: "isabelbenatar2018@u.northwestern.edu",
                    phone: "(650)862-6055"},
		        {name:"David Wallach",
                    email: "davidwallach2018@u.northwestern.edu",
                    phone: "(510)414-8533"},
		        {name:"Jonah Adler",
                    email: "jonahadler2018@u.northwestern.edu",
                    phone: "(470)555-8564"},
		        {name:"Ben Kalish",
                    email: "benkalish2018@u.northwestern.edu",
                    phone: "(890)414-8983"}
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
