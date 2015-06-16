var app = angular.module ('StoryApp', ['ngRoute'])

app.config(function ($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/index',
    controller: "mainCtrl"
  }).
  when('/chapters', {
    templateUrl: 'views/chapters',
    controller: 'tocCtrl'
  }).
  when('/lamb_form', {
    templateUrl: 'views/lamb_form',
    controller: 'formCtrl'
  }).
  when('/story_templates/little_buddy_tmpl', {
    templateUrl: 'views/story_templates/little_buddy_tmpl',
    controller: 'storyCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
});
