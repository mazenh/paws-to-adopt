(function(){
	var app=angular.module("app");
	app.controller("adopt",adopt);
	function adopt($scope){
		      $scope.data = JSON.parse(localStorage.getItem("data"));
	}
		}) ();
