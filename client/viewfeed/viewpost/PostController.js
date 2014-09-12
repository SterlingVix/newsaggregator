angular.module('viewparent.viewfeed.viewpost', [])
.controller('PostController', function($scope, $http, $q) {  //OLD:  .controller('PostsController', function($scope, GetPosts) {
    var self = this;
    var currentRoute = ''; // for dynamically changing route
    var nprRoute = '/api/npr';
    var redditRoute = '/api/reddit';

    // var post=[]; // an array of individual posts(?)
    var postsArray = [];
    var tempResultObject = {};
    // var deferred = $q.defer(); // some q deferring promise object...
    var deferred = $q.defer(); // some q deferring promise object...
    var newDateObject = new Date() * 1; // numerical date object


  self.getPostsFromDb = function() { // Get the posts from DB
    $http.get('/api/reddit') // end http.get()
    .success(function(response) { // Success
      deferred.resolve(response);
      console.log("deferred: ", deferred);

      return deferred.promise; // where is this returning?!
    }) // end success()
    .then(function(response) { // operate on the response.data returned as a promise from $http.get()
      angular.forEach(response, function(value, key) {
        // debugger;
        postsArray.push(value);
        // $scope.post.push(value);
      }); // end angular.forEach(push posts)
    }); // end success().then()
  }; // end getPostsFromDb()

  self.getPostsFromDb(); // immediate invocation






    var getPosts = function($http) {
    // $scope.getPosts = function($http, deferred) {
      $http.get('http://127.0.0.1:8080/api/content')
        .success(function(res) {
          return res; // where is this returning?!
        }) // end .success
      .then(function(res) { ////////////////////
        angular.forEach(res, function(value, key) {
          $scope.post.push(value);
        }); // end angular.forEach(push posts)
      }); // end GetPosts.gotten().then()
    }; // end getPosts()

    getPosts(); // invoke immediately. REFACTOR THIS OUT





    var getPosts = function($http, deferred) {
    // $scope.getPosts = function($http, deferred) {
      $http.get('http://127.0.0.1:8080/api/content')
        .success(function(res) {
          deferred.resolve(res);
          return deferred.promise; // where is this returning?!
        }) // end .success
      .then(function(res) { ////////////////////
        angular.forEach(res, function(value, key) {
          $scope.post.push(value);
        }); // end angular.forEach(push posts)
      }); // end GetPosts.gotten().then()
    }; // end getPosts()

    getPosts(); // invoke immediately. REFACTOR THIS OUT

}) // end controller PostController
.directive('viewpost', function() {
  return {
    restrict: 'E',
    // scope: {data: '='},
    scope: {postdata: '='},
    templateUrl: 'viewfeed/viewpost/viewpost.template.html'
    // replace: true
  }; // end return for viewfeed
}) // end <viewpost>
// .controller('getHTMLController', function($scope, $http) {
//     $scope.getHTML = function(url) {
//       // var url = $scope.url;
//       $http.get(url, function(res) {
//         // document.getElementById('articleFrame').src='"' + escape(res) + '"';
//       })
//     }

// }); // end getHTMLController
