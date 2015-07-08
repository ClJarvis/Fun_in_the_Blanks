var app = angular.module ('StoryApp', ['ngRoute', 'firebase']);


app.config(function ($routeProvider) {
  $routeProvider.

  when('/howto', {
    templateUrl: 'views/howto.html',
    controller: 'howCtrl'
  }).
  when('/', {
    templateUrl: 'views/chapters',
    controller: 'tocCtrl'
  }).
  when('/lamb', {
    templateUrl: 'views/lambStory.html',
    controller: 'lambCtrl'
  }).
  when('/pig', {
    templateUrl: 'views/littlePigStory.html',
    controller: 'pigCtrl'
  }).
    when('/bean', {
    templateUrl: 'views/beanStalkStory.html',
    controller: 'stalkCtrl'
  }).
  when('/classic', {
  templateUrl: 'views/foodieStory.html',
  controller: 'classicCtrl'
  }).
  when('/midas', {
  templateUrl: 'views/midasStory.html',
  controller: 'midasCtrl'
  }).
  when('/baa', {
  templateUrl: 'views/baaStory.html',
  controller: 'baaCtrl'
  }).
   when('/code', {
  templateUrl: 'views/codeStory.html',
  controller: 'codeCtrl'
  }).
  otherwise({
    redirectTo: '/'
  });
});


// app.constant('API_URL', 'https://funblanks.firebaseio.com');
