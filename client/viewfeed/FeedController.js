angular.module('viewparent.viewfeed', [])
.controller('FeedController', [function($scope) {
    $scope.someArray=[];
    $scope.feedFunction = function() {
      return console.log("clicked");
    };
}])
.directive('viewfeed', function() {
  return {
    restrict: 'E',
    scope: {data: '='},
    templateUrl: 'viewfeed/viewfeed.template.html',
    replace: true
  }; // end return for viewfeed
});