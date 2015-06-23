app.controller('pigCtrl', function ($scope, $location, $http) {
  $scope.message = "pig contoller";
  $scope.story= {};
  $scope.myStory=false;
  $scope.myForm=true;

  $scope.buildStory=function() {
    $scope.myForm=false;
    $scope.myStory=true;
    console.log("before call");
      $http({
      method: 'POST',
      url: 'https://funblanks.firebaseio.com/',
      data: {
        // var newStory = new Firebase("https://funblanks.firebaseio.com/");
        // var userStory = ref.child('stories')
        storyText.set({

        })
      }
    })
  }

  $scope.tableContents = function () {
    $location.path('/chapters')
  }

});
