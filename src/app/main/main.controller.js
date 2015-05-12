'use strict';

angular.module('soliloquy')
  .controller('MainCtrl', function ($scope) {
    $scope.courses = [
      {
        id: undefined,
        title: "All"
      },
      {
        id: 1,
        title: "Russian 1A"
      },
      {
        id: 2,
        title: "Chinese 1B"
      },
      {
        id: 3,
        title: "Itallian 22"
      },
      {
        id: 4,
        title: "French 33"
      },
      {
        id: 5,
        title: "German 44"
      }
    ];

    $scope.collections = [
      {
        id: undefined,
        title: "All"
      },
      {
        id: 1,
        title: "Week 1"
      },
      {
        id: 2,
        title: "Week 2"
      },
      {
        id: 3,
        title: "Week 3"
      },
      {
        id: 4,
        title: "Week 4"
      },
      {
        id: 5,
        title: "Nouns"
      },
      {
        id: 6,
        title: "Verbs"
      },
      {
        id: 7,
        title: "Adjectives"
      }
    ];

    $scope.exercises = [
      {
        id: 1,
        title: "exercise 1"
      },
      {
        id: 2,
        title: "exercise 2"
      },
      {
        id: 3,
        title: "exercise 3"
      },
      {
        id: 4,
        title: "exercise 4"
      },
      {
        id: 5,
        title: "exercise 5"
      },
      {
        id: 6,
        title: "exercise 6"
      },

    ];

/*
    $scope.awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      },
      {
        'title': 'Angular UI Bootstrap',
        'url': 'http://angular-ui.github.io/bootstrap/',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'logo': 'ui-bootstrap.png'
      },
      {
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png'
      }
    ];
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
    */
  });
