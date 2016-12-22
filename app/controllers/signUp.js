(function() {
	var app = angular.module("app");
	app.controller("signUp", signUp);
	function signUp($scope,$window) {
		var userExist;
		$scope.send = function() {
userExist=false;
			var users = getUsers();
		console.log(users)
			if (users) {
				users.forEach(function(user) {
					if (user.email == $scope.email) {
					
						userExist=true;
					}
				});
			} else {
				users = [];
			}
		if(userExist)
		{
			alert("email exist!")
				return;
		}
	
			var data = {
				name : $scope.name,
				email : $scope.email,
				password : $scope.password,
			};
			users.push(data)
			var JSONdata = JSON.stringify(users);
			localStorage.setItem("users", JSONdata);
			$window.location.href = "#adopt";
		};
		function getUsers() {
			var users = localStorage.getItem("users");
			return JSON.parse(users);

		};

	};
})();
