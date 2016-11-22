(function() {
	var app = angular.module("app");
	app.controller("adopt", adopt);
	function adopt($scope) {
		$scope.dataList = JSON.parse(localStorage.getItem("data"));
	};
	

})();
