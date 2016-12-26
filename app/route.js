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
        .when("/about", {
        templateUrl : "app/views/about.html"
      })
        .when("/contactUs", {
        templateUrl : "app/views/contactUs.html"
      })

.otherwise({
	redirectTo:'/'
});
});
})();
