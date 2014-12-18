app.controller("NavController", function($scope, $location){

	$scope.location = $location.absUrl().substring(19);

	if ($scope.location.indexOf("works/") == 0) {
		$scope.active = 2;
	}
	else if ($scope.location.indexOf("statistics/") == 0) {
		$scope.active = 3;
	}
	else if ($scope.location.indexOf("likes/") == 0) {
		$scope.active = 4;
	}
	else {
		$scope.active = 1;
	}

});
