'use strict';

/**
 * @ngdoc overview
 * @name kumlaAltarApp
 * @description
 * # kumlaAltarApp
 *
 * Main module of the application.
 */
angular
    .module('kumlaAltarApp', [
        'ngAnimate',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'bootstrapLightbox'
    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            // Frontpage
            .state('home', {
                url: '/home',
                templateUrl: '../views/home.html',
                controller: ''
            })
            // Project
            .state('project1', {
                url: '/project1',
                templateUrl: '../views/project/project1.html',
                controller: ''
            })
            .state('project2', {
                url: '/project2',
                templateUrl: '../views/project/project2.html',
                controller: ''
            })
            // History
            .state('history1', {
                url: '/history1',
                templateUrl: '../views/history/history1.html',
                controller: ''
            })
            .state('history2', {
                url: '/history2',
                templateUrl: '../views/history/history2.html',
                controller: ''
            })
            // Conservation
            .state('conservation1', {
                url: '/conservation1',
                templateUrl: '../views/conservation/conservation1.html',
                controller: ''
            })
            .state('conservation2', {
                url: '/conservation2',
                templateUrl: '../views/conservation/conservation2.html',
                controller: ''
            })
            // Materials
            .state('materials1', {
                url: '/materials1',
                templateUrl: '../views/materials/materials1.html',
                controller: ''
            })
            .state('materials2', {
                url: '/materials2',
                templateUrl: '../views/materials/materials2.html',
                controller: ''
            });
    });