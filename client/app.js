angular.module('newsaggregator', [
  'ui.router',
  'newsaggregator.viewparent',
  'viewparent.viewheader',
  'viewparent.viewfeed',
  'viewparent.viewfeed.viewpost',
  'viewparent.viewiframe'
  // 'ngRoute'
])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'viewparent/viewparent.template.html',
      controller: 'ParentController'
    });

  $urlRouterProvider.otherwise('/');

  // We add our $httpInterceptor into the array
  // of interceptors. Think of it like middleware for your ajax calls
  // [interceptors](https://github.com/angular/angular.js/blob/master/src/ng/http.js#L337)
  // $httpProvider.interceptors.push('AttatchTokens');
  
}]);
// .factory('GetPosts', function ($http, $q) {
//   var gotten = function() {
//     var deferred = $q.defer();
//     $http.get('http://127.0.0.1:8080/api/content').success(function(res) {
//       deferred.resolve(res);
//     });
//     return deferred.promise;
//   }
//   return {
//     gotten: gotten
//   };
// });