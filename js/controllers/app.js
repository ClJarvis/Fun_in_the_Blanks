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
  when('/threelittle_form', {
    templateUrl: 'views/threelittle_form',
    controller: 'formCtrl'
  }).
  when('/story_templates/three_little_tmpl', {
    templateUrl: 'views/story_templates/three_little_tmpl',
    controller: 'storyCtrl'
  }).
    when('/beanstalk_form', {
    templateUrl: 'views/beanstalk_form',
    controller: 'formCtrl'
  }).
  when('/story_templates/beanstalk_tmpl', {
    templateUrl: 'views/story_templates/beanstalk_tmpl',
    controller: 'storyCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
});
