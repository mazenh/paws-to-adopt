(function(){
var app = angular.module("app");
app.config(function($routeProvider) {
    $routeProvider
    .when("/adopt", {
        templateUrl : "app/views/adopt.html"
      })
      .when("/signUp", {
        templateUrl : "app/views/signUp.html"
      })
      .when("/signIn", {
        templateUrl : "app/views/signIn.html"
      })

.otherwise({
	redirectTo:'/'
});
});
})();
