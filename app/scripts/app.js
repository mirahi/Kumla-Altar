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
                url: '/project/participants',
                templateUrl: '../views/project/project1.html',
                controller: 'ParticipantsController as participants'
            })
            .state('project2', {
                url: '/project/funding',
                templateUrl: '../views/project/project2.html',
                controller: ''
            })
            .state('project3', {
                url: '/project/aims-and-goals',
                templateUrl: '../views/project/project3.html',
                controller: ''
            })
            // History
            .state('history1', {
                url: '/history/history-of-the-altar',
                templateUrl: '../views/history/history1.html',
                controller: ''
            })
            .state('history2', {
                url: '/history/medieval-workshop-practice',
                templateUrl: '../views/history/history2.html',
                controller: ''
            })
            .state('history3', {
                url: '/history/medieval-techniques',
                templateUrl: '../views/history/history3.html',
                controller: ''
            })
            .state('history4', {
                url: '/history/decoration',
                templateUrl: '../views/history/history4.html',
                controller: ''
            })
            .state('history5', {
                url: '/history/annunciation',
                templateUrl: '../views/history/history5.html',
                controller: ''
            })
            .state('history6', {
                url: '/history/passion-of-the-christ',
                templateUrl: '../views/history/history6.html',
                controller: ''
            })
            .state('history7', {
                url: '/history/sculptures',
                templateUrl: '../views/history/history7.html',
                controller: ''
            })
            // Conservation
            .state('conservation1', {
                url: '/conservation/conservation-and-treatments',
                templateUrl: '../views/conservation/conservation1.html',
                controller: ''
            })
            .state('conservation2', {
                url: '/conservation/before-and-after',
                templateUrl: '../views/conservation/conservation2.html',
                controller: ''
            })
            .state('conservation3', {
                url: '/conservation/materials-and-tools',
                templateUrl: '../views/conservation/conservation3.html',
                controller: ''
            })
            // Materials
            .state('materials1', {
                url: '/materials/xrf',
                templateUrl: '../views/materials/materials1.html',
                controller: ''
            })
            .state('materials2', {
                url: '/materials/ftir',
                templateUrl: '../views/materials/materials2.html',
                controller: ''
            })
            .state('materials3', {
                url: '/materials/paint-cross-sections',
                templateUrl: '../views/materials/materials3.html',
                controller: ''
            })
            .state('materials4', {
                url: '/materials/summary',
                templateUrl: '../views/materials/materials4.html',
                controller: ''
            });
    });