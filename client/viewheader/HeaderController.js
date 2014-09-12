angular.module('viewparent.viewheader', [])
.controller('HeaderController', [function($scope) {
    $scope.someArray=[];
}])
.directive('viewheader', function() {
  return {
    restrict: 'E',
    scope: {data: '='},
    templateUrl: 'viewheader/viewheader.template.html',
    replace: true
  }; // end return for viewheader
});