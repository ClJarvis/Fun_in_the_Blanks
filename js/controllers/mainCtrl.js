app.controller('mainCtrl', function($scope, $location) {

$scope.message='Fun in The Blanks';
$scope.chapters=function() {
  $location.path ('/chapters')
}

  $scope.howto=function() {
    $location.path ('/howto')
  }

});
