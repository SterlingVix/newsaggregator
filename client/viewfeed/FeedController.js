angular.module('viewparent', []) // 'posts.directive', // 'getHTML'
/* .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      // templateUrl: 'posts/posts.html',
      // controller: 'PostsController'
      templateUrl: 'viewparent/viewparent',
      controller: 'viewparent/ParentController'
    });
  $urlRouterProvider.otherwise('/');
}]) */
.controller('ParentController', function($scope) {
    $scope.someArray=[];
});