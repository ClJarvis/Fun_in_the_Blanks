app.controller('mainCtrl', ['$scope', '$location', '$firebaseArray', function ($scope, $location, $firebaseArray) {
  var ref = new Firebase('https://funblanks.firebaseio.com/');
  $scope.message = $firebaseArray(ref);

  $scope.message='Fun in The Blanks';
  $scope.chapters=function() {
  $location.path ('/chapters')
}

  $scope.howto=function() {
    $location.path ('/howto')
  }

  $scope.register=function() {
    $location.path ('/')
  }
}]);
