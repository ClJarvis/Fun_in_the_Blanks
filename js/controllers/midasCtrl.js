app.controller('midasCtrl', ['$scope', '$location', '$firebaseArray', function ($scope, $location, $firebaseArray) {
  $scope.message = "midas story";
  $scope.story= {};
  $scope.myStory=false;
  $scope.myForm=true;
  var ref = new Firebase('https://funblanks.firebaseio.com/stories');
  $scope.messages=$firebaseArray(ref);

  $scope.buildStory=function() {
    $scope.myForm=false;
    $scope.myStory=true;
    $scope.messages.$add($scope.story);

  };

  $scope.tableContents = function () {
    $location.path('/chapters');
  };

}]);
