'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History44Controller
 * @description
 * # History44Controller
 * Controller for tracery
 */
angular
    .module('kumlaAltarApp')
    .controller('History44Controller', function ($scope, Lightbox) {

        var vm = this;

        vm.corpus = [
            {
                url: 'http://placehold.it/1280x720',
                caption: '1. Corpus without sculptures before conservation',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2. Corpus, tracery of the left panel',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3. Corpus, tracery of the socle',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '4. Corpus, tracery of the socle, red pasteboard behind the tracery to intensify colour',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '5. Corpus, tracery of the socle',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];

        $scope.openLightboxModalCorpus = function (index) {
            Lightbox.openModal(vm.corpus, index);
        };

        vm.leftWing = [
            {
                url: 'http://placehold.it/1280x720',
                caption: '1. Inner left wing, inside without sculptures before conservation',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2. Inner left wing, tracery on the left side',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3. Inner left wing, detail of the tracery',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '4. Inner left wing, tracery of the socle',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '5. Inner left wing, socle, detail of the tracery',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];

        $scope.openLightboxModalLeftWing = function (index) {
            Lightbox.openModal(vm.leftWing, index);
        };
        
        vm.rightWing = [
            {
                url: 'http://placehold.it/1280x720',
                caption: '1. Inner right wing, inside without sculptures before conservation',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2. Pasteboard seen from the back of the tracery',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3. Blue colour from the lost pasteboard on the back of the tracery',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '4. Pasteboard with watermark behind tracery',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];

        $scope.openLightboxModalRightWing = function (index) {
            Lightbox.openModal(vm.rightWing, index);
        };

    });
