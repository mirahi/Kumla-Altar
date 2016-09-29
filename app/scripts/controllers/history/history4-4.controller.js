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
                url: 'images/history/history44/corpus/720_1.jpg',
                caption: '1. Corpus without sculptures before conservation',
                thumbUrl: 'images/history/history44/corpus/720_1.jpg'
            },
            {
                url: 'images/history/history44/corpus/720_2.jpg',
                caption: '2. Corpus, tracery of the left panel',
                thumbUrl: 'images/history/history44/corpus/720_2.jpg'
            },
            {
                url: 'images/history/history44/corpus/720_3.jpg',
                caption: '3. Corpus, tracery of the socle',
                thumbUrl: 'images/history/history44/corpus/720_3.jpg'
            },
            {
                url: 'images/history/history44/corpus/720_4.jpg',
                caption: '4. Corpus, tracery of the socle, red pasteboard behind the tracery to intensify colour',
                thumbUrl: 'images/history/history44/corpus/720_4.jpg'
            },
            {
                url: 'images/history/history44/corpus/720_5.jpg',
                caption: '5. Corpus, tracery of the socle',
                thumbUrl: 'images/history/history44/corpus/720_5.jpg'
            }
        ];

        $scope.openLightboxModalCorpus = function (index) {
            Lightbox.openModal(vm.corpus, index);
        };

        vm.leftWing = [
            {
                url: 'images/history/history44/inner-left-wing/720_1.jpg',
                caption: '1. Inner left wing, inside without sculptures before conservation',
                thumbUrl: 'images/history/history44/inner-left-wing/720_1.jpg'
            },
            {
                url: 'images/history/history44/inner-left-wing/720_2.jpg',
                caption: '2. Inner left wing, tracery on the left side',
                thumbUrl: 'images/history/history44/inner-left-wing/720_2.jpg'
            },
            {
                url: 'images/history/history44/inner-left-wing/720_3.jpg',
                caption: '3. Inner left wing, detail of the tracery',
                thumbUrl: 'images/history/history44/inner-left-wing/720_3.jpg'
            },
            {
                url: 'images/history/history44/inner-left-wing/720_4.jpg',
                caption: '4. Inner left wing, tracery of the socle',
                thumbUrl: 'images/history/history44/inner-left-wing/720_4.jpg'
            },
            {
                url: 'images/history/history44/inner-left-wing/720_5.jpg',
                caption: '5. Inner left wing, socle, detail of the tracery',
                thumbUrl: 'images/history/history44/inner-left-wing/720_5.jpg'
            }
        ];

        $scope.openLightboxModalLeftWing = function (index) {
            Lightbox.openModal(vm.leftWing, index);
        };
        
        vm.rightWing = [
            {
                url: 'images/history/history44/inner-right-wing/720_1.jpg',
                caption: '1. Inner right wing, inside without sculptures before conservation',
                thumbUrl: 'images/history/history44/inner-right-wing/720_1.jpg'
            },
            {
                url: 'images/history/history44/inner-right-wing/720_2.jpg',
                caption: '2. Pasteboard seen from the back of the tracery',
                thumbUrl: 'images/history/history44/inner-right-wing/720_2.jpg'
            },
            {
                url: 'images/history/history44/inner-right-wing/720_3.jpg',
                caption: '3. Blue colour from the lost pasteboard on the back of the tracery',
                thumbUrl: 'images/history/history44/inner-right-wing/720_3.jpg'
            },
            {
                url: 'images/history/history44/inner-right-wing/720_4.jpg',
                caption: '4. Pasteboard with watermark behind tracery',
                thumbUrl: 'images/history/history44/inner-right-wing/720_4.jpg'
            }
        ];

        $scope.openLightboxModalRightWing = function (index) {
            Lightbox.openModal(vm.rightWing, index);
        };

    });
