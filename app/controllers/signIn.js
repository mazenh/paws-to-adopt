(function(){
	var app=angular.module("app");
	app.controller("signIn",signIn);
	function signIn($scope){
		$scope.send=function(){
				var data={
					name:$scope.name,
					age:$scope.age,
					breed:$scope.breed,
					location:$scope.location,
					phone:$scope.phone,
					file:$scope.file,
				};
				var JSONdata=JSON.stringify(data);
				localStorage.setItem("data",JSONdata);
		     };
	
	}
})();
