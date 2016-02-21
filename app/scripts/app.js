'use strict';

var app = angular.module('gdgWebappApp', [
    'ngMaterial',
    'ngRoute'
  ])
  .controller('AppCtrl', function($scope, $location, $window) {
    $scope.go = function(url) {
      $location.path(url);
    };

    $scope.scrollToTop = function(home) {
      if (home === 'home') {
        $window.scrollTo(0, 0);
      } else {
        $window.scrollTo(0, 1);
      }
    };

    this.items = [{
      name: 'Twitter',
      icon: 'images/icons/twitter.a59e6b76.svg',
      // icon: 'images/icons/twitter.svg',
      url: 'https://twitter.com/ioextendedgr'
    }, {
      name: 'Google Plus',
      icon: 'images/icons/google-plus.8f170833.svg',
      // icon: 'images/icons/google-plus.svg',
      url: 'https://plus.google.com/116106643420425488667/about'
    }, {
      name: 'Github',
      icon: 'images/icons/github-circle.231d7cad.svg',
      // icon: 'images/icons/github-circle.svg',
      url: 'https://github.com/GDG-Grand-Rapids'
    }, {
      name: 'Facebook',
      icon: 'images/icons/facebook.c3e23151.svg',
      // icon: 'images/icons/facebook.svg',
      url: 'https://www.facebook.com/gdggrandrapids'
    }, {
      name: 'Meetup',
      icon: 'images/icons/calendar-check.09b470a8.svg',
      // icon: 'images/icons/calendar-check.svg',
      url: 'http://www.meetup.com/GDG-Grand-Rapids/'
    }];
  })
  .config(function($routeProvider, $mdThemingProvider) {
    $mdThemingProvider.definePalette('gdgPalette', {
      '50': 'ffffff',
      '100': 'B2DFDB',
      '200': '80CBC4',
      '300': '4DB6AC',
      '400': '26A69A',
      '500': '006064',
      '600': '00897B',
      '700': '00796B',
      '800': '00695C',
      '900': '004D40',
      'A100': 'A7FFEB',
      'A200': '64FFDA',
      'A400': '1DE9B6',
      'A700': '00BFA5'
    });
    $mdThemingProvider.theme('default')
      .primaryPalette('gdgPalette', {
        'default': '500',
        'hue-1': '50',
        'hue-2': '50',
        'hue-3': '50'
      });

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl',
        controllerAs: 'events'
      })
      .when('/sponsors', {
        templateUrl: 'views/sponsors.html',
        controller: 'SponsorCtrl',
        controllerAs: 'sponsors'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.directive('scroll', function($window) {
  return function($scope) {
    angular.element($window).bind('scroll', function() {
      if (this.pageYOffset >= 1) {
        $scope.menuScroll = true;
      } else {
        if ($scope.home === false) {
          $scope.menuScroll = true;
        } else {
          $scope.menuScroll = false;
        }
      }
      $scope.$apply();
    });
  };
});
