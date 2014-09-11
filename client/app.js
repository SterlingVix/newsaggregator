angular.module('newsaggregator', [
  'posts',
  'ngRoute',
  'ui.router'
])
// angular.module('app', [
//   'viewparent',
//   'posts',
//   'ngRoute',
//   'ui.router'
// ])
// .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('home', {
//       url: '/',
//       // templateUrl: 'posts/posts.html',
//       // controller: 'PostsController'
//       templateUrl: 'viewparent/viewparent',
//       controller: 'ParentController'
//     });

//   $urlRouterProvider.otherwise('/');
    
// }])
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
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
  
})


.factory('GetPosts', function ($http, $q) {
  var gotten = function() {
    var deferred = $q.defer();
    $http.get('http://127.0.0.1:8080/api/content').success(function(res) {
      deferred.resolve(res);
    });
    return deferred.promise;
  }
  return {
    gotten: gotten
  };
});

// .config(function($httpProvider) {
//   // Enables cross domain calls
//   $httpProvider.defaults.useXDomain = true;
//   // Removes the header used to identify ajax calls that would prevent CORS from working
//   delete $httpProvider.defaults.headers.common['X-Requested-With'];
// });
// // .config(['$httpProvider', function($httpProvider) {
//   $httpProvider.defaults.useXDomain = true;
//   $httpProvider.defaults.withCredentials = true;
//   delete $httpProvider.defaults.headers.common["X-Requested-With"];
//   $httpProvider.defaults.headers.common["Accept"] = "application/json";
//   $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
// }]);