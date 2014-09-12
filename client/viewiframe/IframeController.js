angular.module('viewparent.viewiframe', ['viewparent.viewfeed'])
.controller('IframeController', function($scope) {
    $scope.someArray=[];
})
.directive('viewiframe', function() {
  return {
    restrict: 'E',
    scope: {data: '='},
    templateUrl: 'viewiframe/viewiframe.template.html',
    replace: true
  }; // end return for viewfeed
});