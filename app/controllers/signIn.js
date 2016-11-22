(function() {
	var app = angular.module("app");
	app.controller("signIn", signIn);
	function signIn($scope,fileService) {
		 function send(image) {
		 	var myData=localStorage.getItem("data");
		 	myData=JSON.parse(myData);
		 	if(!myData)myData=[];
			var data = {
				name : $scope.name,
				age : $scope.age,
				breed : $scope.breed,
				location : $scope.location,
				phone : $scope.phone,
				email : $scope.email,
				file : image.name,
			};
			myData.push(data);
			var JSONdata = JSON.stringify(myData);
			localStorage.setItem("data", JSONdata);
		};
		$scope.uploadFile = function() {
			var url = "/upload";
			var file = $scope.myFile;
			console.log("file", file);
			fileService.uploadFileToUrl(file, url);
			send(file);
		};

	}

})();
