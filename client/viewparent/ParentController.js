angular.module('newsaggregator.viewparent', [
  'viewparent.viewheader',
  'viewparent.viewfeed',
  'viewparent.viewiframe'
])
  .controller('ParentController', function($rootScope, $scope, Posts) {
    // $scope.apiRoute = '/api/reddit'; // we should modularize lateer...
    var self = this;
    $scope.apiData = [];
    // $rootScope.tempArray = [];

    Posts.get( /*$scope.apiRoute*/ ).then(function(response) {
      // angular.forEach(response, function(value, key) {
      var postsArray = [];

      var parsed = angular.fromJson(response.data) // parses the data object
      var parsedLength = parsed.data.children.length;

      for (var i = 0; i < parsedLength; i++) {
        var thisPostObject = parsed.data.children[0].data;
        postsArray.push(thisPostObject);
      } // push all post objects to array

      console.log('postsArray: ', postsArray);
      $rootScope.tempArray = postsArray;
      return postsArray;
    }); // end Posts.get().then()

    var makeConformantPosts = function(arrayOfPosts) {
      var result = [];
      // var conformantObject = {
      //   author: '',
      //   created: '',
      //   name: '',
      //   permalink: '',
      //   // selftext: '',
      //   score: '',
      //   subreddit: '',
      //   thumbnail: '',
      //   title: '',
      //   url: '',
      //   visited: ''
      // };

      for (var i = 0; i < arrayOfPosts.length; i++) {
        var conformantObject = {
          author:     arrayOfPosts[i].author,
          created:    arrayOfPosts[i].created,
          name:       arrayOfPosts[i].name,
          permalink:  arrayOfPosts[i].permalink,
          selftext:   arrayOfPosts[i].selftext,
          score:      arrayOfPosts[i].score,
          subreddit:  arrayOfPosts[i].subreddit,
          thumbnail:  arrayOfPosts[i].thumbnail,
          title:      arrayOfPosts[i].title,
          url:        arrayOfPosts[i].url,
          visited:    arrayOfPosts[i].visited
        };
        result.push(conformantObject);
      } // end (iterate over array)
      return result; // return arrays
    }; // end makeConformantPosts(arrayOfPosts)


  })
  .factory('Posts', function($http, $q) {
    return {
      get: function() {
        var deferred = $q.defer();
        $http.get('/api/reddit').success(function(res) {
          deferred.resolve(res);
        });
        return deferred.promise;
      } // end get()
    }; // return get()
  }); // end factory

// .directive('debug', function() { // FOR DEBUGGING
//   return {
//     restrict: 'E',
//     scope: {
//       expression: '= val'
//     },
//     template: '<pre>{{debug(expression)}}</pre>',
//     link: function(scope) {
//       scope.debug = function(exp) {
//         return angular.toJson(exp, true);
//       };
//     }
//   }
// });
