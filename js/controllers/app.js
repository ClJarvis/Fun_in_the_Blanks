var app = angular.module ('StoryApp', ['ngRoute', 'firebase']);
// var app = angular.module('StoryApp', ['firebase']);


app.config(function ($routeProvider) {
  $routeProvider.
  when('/', {
    templateUrl: 'views/index',
    controller: "mainCtrl"
  }).
  when('/register', {
    templateUrl: 'views/register.html',
    controller: "AuthCtrl"
  }).
  when('/login', {
    templateUrl: 'views/login.html',
    controller: "AuthCtrl"
  }).
  when('/howto', {
    templateUrl: 'views/howto.html',
    controller: 'howCtrl'
  }).
  when('/chapters', {
    templateUrl: 'views/chapters',
    controller: 'tocCtrl'
  }).
  when('/lamb', {
    templateUrl: 'views/lambStory.html',
    controller: 'lambCtrl'
  // }).
  // when('/story_templates/little_buddy_tmpl', {
  //   templateUrl: 'views/story_templates/little_buddy_tmpl',
  //   controller: 'storyCtrl'
  }).
  when('/pig', {
    templateUrl: 'views/littlePigStory.html',
    controller: 'pigCtrl'
  }).
  when('/story_templates/three_little_tmpl', {
    templateUrl: 'views/story_templates/three_little_tmpl',
    controller: 'storyCtrl'
  }).
    when('/bean', {
    templateUrl: 'views/beanStalkStory.html',
    controller: 'stalkCtrl'
  }).
  when('/story_templates/beanstalk_tmpl', {
    templateUrl: 'views/story_templates/beanstalk_tmpl',
    controller: 'storyCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
});


app.constant('API_URL', 'https://funblanks.firebaseio.com');
