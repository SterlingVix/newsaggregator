angular.module('newsaggregator.viewparent', [
  'viewparent.viewheader',
  'viewparent.viewfeed',
  // 'viewparent.viewfeed.viewpost',
  'viewparent.viewiframe',
])
.controller('ParentController', [function($scope) {
  // functions here
}]);


// .directive('debug', function() {
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
