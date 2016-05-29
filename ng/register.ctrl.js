angular.module('app').controller('RegisterCtrl', ['$scope', 'UserSvc', function($scope, UserSvc){
	

	$scope.register = function(username, password){
		UserSvc.createUser(username, password)
		console.log('newuser');
	};

}]);