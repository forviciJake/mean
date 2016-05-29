angular.module('app').controller('LoginCtrl', ['$scope', 'UserSvc', function($scope, UserSvc){

	$scope.login = function(username, password){
		console.log(username)
		console.log(password)
		
		UserSvc.login(username, password)
		.then(function(response){
			$scope.$emit('login', response.data)
			console.log(user)
		})
	};

}]);