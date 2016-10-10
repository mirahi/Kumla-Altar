'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History42Controller
 * @description
 * # History42Controller
 * Controller for punch work patterns
 */
angular
    .module('kumlaAltarApp')
    .controller('History42Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.corpus = [
            {
                url: 'images/history/history42/corpus/720_1.jpg',
                caption: 'Corpus without sculptures before conservation',
                thumbUrl: 'images/history/history42/corpus/720_1.jpg'
            },
            {
                url: 'images/history/history42/corpus/720_2.jpg',
                caption: 'Corpus, punched halo of Holy Bishop St. Eskil',
                thumbUrl: 'images/history/history42/corpus/720_2.jpg'
            },
            {
                url: 'images/history/history42/corpus/720_2a.jpg',
                caption: 'Corpus, punched halo of Holy Bishop St. Eskil',
                thumbUrl: 'images/history/history42/corpus/720_2a.jpg'
            },
            {
                url: 'images/history/history42/corpus/720_3.jpg',
                caption: 'Corpus, punched halo of the Virgin Mary',
                thumbUrl: 'images/history/history42/corpus/720_3.jpg'
            },
            {
                url: 'images/history/history42/corpus/720_3a.jpg',
                caption: 'Corpus, punched halo of the Virgin Mary',
                thumbUrl: 'images/history/history42/corpus/720_3a.jpg'
            },
            {
                url: 'images/history/history42/corpus/720_4.jpg',
                caption: 'Corpus, punched halo of Christ',
                thumbUrl: 'images/history/history42/corpus/720_4.jpg'
            },
            {
                url: 'images/history/history42/corpus/720_4a.jpg',
                caption: 'Corpus, punched halo of Christ',
                thumbUrl: 'images/history/history42/corpus/720_4a.jpg'
            },
            {
                url: 'images/history/history42/corpus/720_5.jpg',
                caption: 'Corpus, punched halo of St. Torkel',
                thumbUrl: 'images/history/history42/corpus/720_5.jpg'
            },
            {
                url: 'images/history/history42/corpus/720_5a.jpg',
                caption: 'Corpus, punched halo of St. Torkel',
                thumbUrl: 'images/history/history42/corpus/720_5a.jpg'
            }
        ];

        $scope.openLightboxModalCorpus = function (index) {
            Lightbox.openModal(vm.corpus, index);
        };

        vm.left = [
            {
                url: 'images/history/history42/left/720_1.jpg',
                caption: 'Inner left wing, inside without sculptures before conservation',
                thumbUrl: 'images/history/history42/left/720_1.jpg'
            },
            {
                url: 'images/history/history42/left/720_2.jpg',
                caption: 'Inner left wing, punched halo of St. Gertrude',
                thumbUrl: 'images/history/history42/left/720_2.jpg'
            },
            {
                url: 'images/history/history42/left/720_2a.jpg',
                caption: 'Inner left wing, punched halo of St. Gertrude',
                thumbUrl: 'images/history/history42/left/720_2a.jpg'
            },
            {
                url: 'images/history/history42/left/720_2b.jpg',
                caption: 'Inner left wing, punched halo of St. Olov',
                thumbUrl: 'images/history/history42/left/720_2b.jpg'
            },
            {
                url: 'images/history/history42/left/720_3.jpg',
                caption: 'Inner left wing, punched halo of St. Olov',
                thumbUrl: 'images/history/history42/left/720_3.jpg'
            },
            {
                url: 'images/history/history42/left/720_3a.jpg',
                caption: 'left, punched halo of the Virgin Mary',
                thumbUrl: 'images/history/history42/left/720_3a.jpg'
            },
            {
                url: 'images/history/history42/left/720_3b.jpg',
                caption: 'left, punched halo of the Virgin Mary',
                thumbUrl: 'images/history/history42/left/720_3b.jpg'
            },
            {
                url: 'images/history/history42/left/720_4.jpg',
                caption: 'Inner left wing, punched halo of St. Peter',
                thumbUrl: 'images/history/history42/left/720_4.jpg'
            },
            {
                url: 'images/history/history42/left/720_4a.jpg',
                caption: 'Inner left wing, punched halo of St. Peter',
                thumbUrl: 'images/history/history42/left/720_4a.jpg'
            },
            {
                url: 'images/history/history42/left/720_4b.jpg',
                caption: 'Inner left wing, punched halo of St. Peter',
                thumbUrl: 'images/history/history42/left/720_4b.jpg'
            }
        ];

        $scope.openLightboxModalLeft = function (index) {
            Lightbox.openModal(vm.left, index);
        };
        
        vm.right = [
            {
                url: 'images/history/history42/right/720_1.jpg',
                caption: 'Inner right wing, inside without sculptures before conservation',
                thumbUrl: 'images/history/history42/right/720_1.jpg'
            },
            {
                url: 'images/history/history42/right/720_2.jpg',
                caption: 'Inner right wing, inside without sculptures before conservation',
                thumbUrl: 'images/history/history42/right/720_2.jpg'
            },
            {
                url: 'images/history/history42/right/720_2a.jpg',
                caption: 'Inner right wing, inside without sculptures before conservation',
                thumbUrl: 'images/history/history42/right/720_2a.jpg'
            },
            {
                url: 'images/history/history42/right/720_3.jpg',
                caption: 'Inner right wing, punched halo of St. Erik',
                thumbUrl: 'images/history/history42/right/720_3.jpg'
            },
            {
                url: 'images/history/history42/right/720_3a.jpg',
                caption: 'Inner right wing, punched halo of St. Erik',
                thumbUrl: 'images/history/history42/right/720_3a.jpg'
            },
            {
                url: 'images/history/history42/right/720_4.jpg',
                caption: 'Inner right wing, punched halo of St. Paul',
                thumbUrl: 'images/history/history42/right/720_4.jpg'
            },
            {
                url: 'images/history/history42/right/720_4a.jpg',
                caption: 'Inner right wing, punched halo of St. Paul',
                thumbUrl: 'images/history/history42/right/720_4a.jpg'
            }
        ];

        $scope.openLightboxModalRight = function (index) {
            Lightbox.openModal(vm.right, index);
        };
        
        vm.other = [
             {
                url: 'images/history/history42/other/720_1.jpg',
                caption: 'Inner other wing, inside without sculptures before conservation',
                thumbUrl: 'images/history/history42/other/720_1.jpg'
            },
            {
                url: 'images/history/history42/other/720_2.jpg',
                caption: 'Inner other wing, punched halo of St. Gertrude',
                thumbUrl: 'images/history/history42/other/720_2.jpg'
            },
            {
                url: 'images/history/history42/other/720_3.jpg',
                caption: 'Inner other wing, punched halo of St. Olov',
                thumbUrl: 'images/history/history42/other/720_3.jpg'
            },
            {
                url: 'images/history/history42/other/720_4.jpg',
                caption: 'Inner other wing, punched halo of St. Peter',
                thumbUrl: 'images/history/history42/other/720_4.jpg'
            },
            {
                url: 'images/history/history42/other/720_5.jpg',
                caption: 'Inner other wing, punched halo of St. Peter',
                thumbUrl: 'images/history/history42/other/720_5.jpg'
            },
            {
                url: 'images/history/history42/other/720_6.jpg',
                caption: 'Inner other wing, punched halo of St. Peter',
                thumbUrl: 'images/history/history42/other/720_6.jpg'
            },
            {
                url: 'images/history/history42/other/720_7.jpg',
                caption: 'other, punched halo of the Virgin Mary',
                thumbUrl: 'images/history/history42/other/720_7.jpg'
            },
            {
                url: 'images/history/history42/other/720_8.jpg',
                caption: 'other, punched halo of the Virgin Mary',
                thumbUrl: 'images/history/history42/other/720_8.jpg'
            },
            {
                url: 'images/history/history42/other/720_9.jpg',
                caption: 'Inner other wing, punched halo of St. Gertrude',
                thumbUrl: 'images/history/history42/other/720_9.jpg'
            },
            {
                url: 'images/history/history42/other/720_10.jpg',
                caption: 'Inner other wing, punched halo of St. Olov',
                thumbUrl: 'images/history/history42/other/720_10.jpg'
            },
            {
                url: 'images/history/history42/other/720_11.jpg',
                caption: 'Inner other wing, punched halo of St. Olov',
                thumbUrl: 'images/history/history42/other/720_11.jpg'
            },
            {
                url: 'images/history/history42/other/720_12.jpg',
                caption: 'Inner other wing, punched halo of St. Olov',
                thumbUrl: 'images/history/history42/other/720_12.jpg'
            }
        ];

        $scope.openLightboxModalOther = function (index) {
            Lightbox.openModal(vm.other, index);
        };

    });
