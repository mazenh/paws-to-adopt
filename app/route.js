(function(){
var app = angular.module("app");
app.config(function($routeProvider) {
    $routeProvider
    .when("/adopt", {
        templateUrl : "app/views/adopt.html"
      })
      .when("/lost&found", {
        templateUrl : "app/views/lost&found.html"
      })
      .when("/signIn", {
        templateUrl : "app/views/signIn.html"
      })

.otherwise({
	redirectTo:'/'
});
});
})();
