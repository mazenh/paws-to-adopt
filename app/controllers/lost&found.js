(function(){
	var app=angular.module("app");
	app.controller("lost&found",lostAndFound);
		function lostAndFound($scope){
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
		      $scope.getData= function(){
		      var data = localStorage.getItem("data");
		      var parsedData =JSON.parse(data);
		      alert(parsedData.name);  
		};
	}
})();