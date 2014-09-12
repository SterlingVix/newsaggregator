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