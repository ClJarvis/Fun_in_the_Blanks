app.controller('formCtrl', function ($scope, $location ) {

  $scope.buildStory1=function() {
    $location.path ('/story_templates/three_little_tmpl', $scope.story)
  }

  $scope.buildStory2=function() {
    $location.path ('/story_templates/beanstalk_tmpl', $scope.story)
  // console.log($story.name);
  }
});


