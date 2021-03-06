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
            // HOME
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'ProjectController as projects'
            })
            // PROJECT
            .state('project', {
                url: '/project',
                templateUrl: 'views/project/project.html',
                controller: 'ProjectController as projects'
            })
            .state('project1', {
                url: '/project/participants',
                templateUrl: 'views/project/project1.html',
                controller: 'ParticipantsController as participants'
            })
            .state('project2', {
                url: '/project/funding',
                templateUrl: 'views/project/project2.html',
                controller: 'ProjectController as projects'
            })
            .state('project3', {
                url: '/project/aims-and-goals',
                templateUrl: '../views/project/project3.html',
                controller: 'ProjectController as projects'
            })
            // History
            .state('history', {
                url: '/history',
                templateUrl: 'views/history/history.html',
                controller: ''
            })
            .state('history1', {
                url: '/history/history-of-the-altar',
                templateUrl: 'views/history/history1.html',
                controller: 'History1Controller as history1'
            })
            .state('history2', {
                url: '/history/medieval-workshop-practice',
                templateUrl: 'views/history/history2.html',
                controller: ''
            })
            .state('history3', {
                url: '/history/medieval-techniques',
                templateUrl: 'views/history/history3.html',
                controller: ''
            })
            .state('history4', {
                url: '/history/decoration',
                templateUrl: 'views/history/history4.html',
                controller: ''
            })
            // HISTORY / DECORATION - KESKEN
            .state('history4-1', {
                url: '/history/decoration/gilding-and-paint-layers',
                templateUrl: 'views/history/history4-1.html',
                controller: 'History41Controller as history41'
            })
            .state('history4-2', {
                url: '/history/decoration/punch-work-patterns',
                templateUrl: '../views/history/history4-2.html',
                controller: 'History42Controller as history42'
            })
            .state('history4-3', {
                url: '/history/decoration/close-up-microscope-photos',
                templateUrl: '../views/history/history4-3.html',
                controller: ''
            })
            .state('history4-4', {
                url: '/history/decoration/tracery',
                templateUrl: 'views/history/history4-4.html',
                controller: 'History44Controller as history44'
            })
            .state('history4-5', {
                url: '/history/decoration/gilded-tin-flower',
                templateUrl: 'views/history/history4-5.html',
                controller: 'History45Controller as history45'
            })
            //
            .state('history5', {
                url: '/history/annunciation',
                templateUrl: 'views/history/history5.html',
                controller: 'History5Controller as history5'
            })
            .state('history6', {
                url: '/history/passion-of-the-christ',
                templateUrl: 'views/history/history6.html',
                controller: 'History6Controller as history6'
            })
            // SCULPTURES
            .state('history7', {
                url: '/history/sculptures',
                templateUrl: 'views/history/history7.html',
                controller: 'History7Controller as history7'
            })
            .state('history7-1', {
                url: '/history/sculptures/the-virgin',
                templateUrl: 'views/history/history7-1.html',
                controller: 'History71Controller as history71'
            })
            .state('history7-2', {
                url: '/history/sculptures/christ',
                templateUrl: 'views/history/history7-2.html',
                controller: 'History72Controller as history72'
            })
            .state('history7-3', {
                url: '/history/sculptures/st-eskil',
                templateUrl: 'views/history/history7-3.html',
                controller: 'History73Controller as history73'
            })
            .state('history7-4', {
                url: '/history/sculptures/st-torkel',
                templateUrl: 'views/history/history7-4.html',
                controller: 'History74Controller as history74'
            })
            .state('history7-5', {
                url: '/history/sculptures/st-gertrud',
                templateUrl: 'views/history/history7-5.html',
                controller: 'History75Controller as history75'
            })
            .state('history7-6', {
                url: '/history/sculptures/st-olov',
                templateUrl: 'views/history/history7-6.html',
                controller: 'History76Controller as history76'
            })
            .state('history7-7', {
                url: '/history/sculptures/st-paul',
                templateUrl: 'views/history/history7-7.html',
                controller: 'History77Controller as history77'
            })
            .state('history7-8', {
                url: '/history/sculptures/st-peter',
                templateUrl: 'views/history/history7-8.html',
                controller: 'History78Controller as history78'
            })
            .state('history7-9', {
                url: '/history/sculptures/st-erik',
                templateUrl: 'views/history/history7-9.html',
                controller: 'History79Controller as history79'
            })
            .state('history7-10', {
                url: '/history/sculptures/st-birgitta',
                templateUrl: 'views/history/history7-10.html',
                controller: 'History710Controller as history710'
            })
            // CONSERVATION
            .state('conservation', {
                url: '/conservation',
                templateUrl: 'views/conservation/conservation.html',
                controller: 'ConservationController as conservation'
            })
            .state('conservation1', {
                url: '/conservation/conservation-and-treatments',
                templateUrl: 'views/conservation/conservation1.html',
                controller: 'Conservation1Controller as conservation1'
            })
            .state('conservation2', {
                url: '/conservation/before-and-after',
                templateUrl: 'views/conservation/conservation2.html',
                controller: 'Conservation2Controller as conservation2'
            })
            .state('conservation3', {
                url: '/conservation/materials-and-tools',
                templateUrl: 'views/conservation/conservation3.html',
                controller: 'Conservation3Controller as conservation3'
            })
            
            // Materials
            .state('materials', {
                url: '/materials',
                templateUrl: 'views/materials/materials.html',
                controller: ''
            })
            .state('materials1', {
                url: '/materials/xrf',
                templateUrl: 'views/materials/materials1.html',
                controller: 'Materials1Controller as materials1'
            })
            .state('materials2', {
                url: '/materials/ftir',
                templateUrl: 'views/materials/materials2.html',
                controller: ''
            })
            .state('materials3', {
                url: '/materials/paint-cross-sections',
                templateUrl: 'views/materials/materials3.html',
                controller: 'Materials3Controller as materials3'
            })
            .state('materials3-1', {
                url: '/materials/paint-cross-sections/samples',
                templateUrl: 'views/materials/materials3-1.html',
                controller: 'Materials31Controller as materials31'
            })
            .state('materials4', {
                url: '/materials/summary',
                templateUrl: 'views/materials/materials4.html',
                controller: ''
            });
    });