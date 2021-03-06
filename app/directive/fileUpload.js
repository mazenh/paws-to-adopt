"use strict";

(function() {
	angular.module("app").directive('fileUpload', fileUpload);

	function fileUpload($parse) {
		return {
			restrict : 'A',
			link : function(scope, element, attrs) {
				var func = $parse(attrs.fileUpload);
				var uploadFunc = func.assign;
				element.bind('change', function() {
					scope.$apply(function() {
						console.log("element[0].files[0]",element[0].files[0])
						uploadFunc(scope, element[0].files[0]);
					});
				});
			}
		};
	};
})();
