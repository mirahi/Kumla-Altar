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
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.corpus = [
            {
                url: 'images/history/history44/corpus/720_1.jpg',
                caption: 'Corpus without sculptures before conservation',
                thumbUrl: 'images/history/history44/corpus/720_1.jpg'
            },
            {
                url: 'images/history/history44/corpus/720_2.jpg',
                caption: 'Corpus, tracery of the left panel',
                thumbUrl: 'images/history/history44/corpus/720_2.jpg'
            },
            {
                url: 'images/history/history44/corpus/720_3.jpg',
                caption: 'Corpus, tracery of the socle',
                thumbUrl: 'images/history/history44/corpus/720_3.jpg'
            },
            {
                url: 'images/history/history44/corpus/720_4.jpg',
                caption: 'Corpus, tracery of the socle, red pasteboard behind the tracery to intensify colour',
                thumbUrl: 'images/history/history44/corpus/720_4.jpg'
            },
            {
                url: 'images/history/history44/corpus/720_5.jpg',
                caption: 'Corpus, tracery of the socle',
                thumbUrl: 'images/history/history44/corpus/720_5.jpg'
            }
        ];

        $scope.openLightboxModalCorpus = function (index) {
            Lightbox.openModal(vm.corpus, index);
        };

        vm.left = [
            {
                url: 'images/history/history44/left/720_1.jpg',
                caption: 'Inner left wing, inside without sculptures before conservation',
                thumbUrl: 'images/history/history44/left/720_1.jpg'
            },
            {
                url: 'images/history/history44/left/720_2.jpg',
                caption: 'Inner left wing, tracery on the left side',
                thumbUrl: 'images/history/history44/left/720_2.jpg'
            },
            {
                url: 'images/history/history44/left/720_3.jpg',
                caption: 'Inner left wing, detail of the tracery',
                thumbUrl: 'images/history/history44/left/720_3.jpg'
            },
            {
                url: 'images/history/history44/left/720_4.jpg',
                caption: 'Inner left wing, tracery of the socle',
                thumbUrl: 'images/history/history44/left/720_4.jpg'
            },
            {
                url: 'images/history/history44/left/720_5.jpg',
                caption: 'Inner left wing, socle, detail of the tracery',
                thumbUrl: 'images/history/history44/left/720_5.jpg'
            }
        ];

        $scope.openLightboxModalLeft = function (index) {
            Lightbox.openModal(vm.left, index);
        };
        
        vm.right = [
            {
                url: 'images/history/history44/right/720_1.jpg',
                caption: 'Inner right wing, inside without sculptures before conservation',
                thumbUrl: 'images/history/history44/right/720_1.jpg'
            },
            {
                url: 'images/history/history44/right/720_2.jpg',
                caption: 'Pasteboard seen from the back of the tracery',
                thumbUrl: 'images/history/history44/right/720_2.jpg'
            },
            {
                url: 'images/history/history44/right/720_3.jpg',
                caption: 'Blue colour from the lost pasteboard on the back of the tracery',
                thumbUrl: 'images/history/history44/right/720_3.jpg'
            },
            {
                url: 'images/history/history44/right/720_4.jpg',
                caption: 'Pasteboard with watermark behind tracery',
                thumbUrl: 'images/history/history44/right/720_4.jpg'
            }
        ];

        $scope.openLightboxModalRight = function (index) {
            Lightbox.openModal(vm.right, index);
        };

    });
