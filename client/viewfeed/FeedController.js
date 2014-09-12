angular.module('viewparent.viewfeed', [])
.controller('FeedController', function($scope) {})
.directive('viewfeed', function() {
  return {
    restrict: 'E',
    scope: {posts: '='}, // creates an isolated scope w/ a posts input (2-way bound)
    templateUrl: 'viewfeed/viewfeed.template.html',
    replace: true
  }; // end return for viewfeed
});
