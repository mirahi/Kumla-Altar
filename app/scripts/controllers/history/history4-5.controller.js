'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History45Controller
 * @description
 * # History45Controller
 * Controller for gilded tin flower
 */
angular
    .module('kumlaAltarApp')
    .controller('History45Controller', function ($scope, Lightbox) {

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history45/720_1.jpg',
                caption: '1. Incomplete gilded tin flower',
                thumbUrl: 'images/history/history45/720_1.jpg'
            },
            {
                url: 'images/history/history45/720_2.jpg',
                caption: '2. The border',
                thumbUrl: 'images/history/history45/720_2.jpg'
            },
            {
                url: 'images/history/history45/720_3.jpg',
                caption: '3. The leaf motive in silver with copper green glaze',
                thumbUrl: 'images/history/history45/720_3.jpg'
            },
            {
                url: 'images/history/history45/720_4.jpg',
                caption: '4. The border between the The Flagellation and the Deposition from the Cross with incomplete gilded tin flowers on both ends of the border',
                thumbUrl: 'images/history/history45/720_4.jpg'
            },
            {
                url: 'images/history/history45/720_5.jpg',
                caption: '5. Molding made of the gilded tin flower',
                thumbUrl: 'images/history/history45/720_5.jpg'
            },
            {
                url: 'images/history/history45/720_6.jpg',
                caption: '6. Molding made of the gilded tin flower',
                thumbUrl: 'images/history/history45/720_6.jpg'
            },
            {
                url: 'images/history/history45/720_7.jpg',
                caption: '7. Border without flowers and the digital reconstruction of the border with gilded tin flowers',
                thumbUrl: 'images/history/history45/720_7.jpg'
            },
            {
                url: 'images/history/history45/720_8.jpg',
                caption: '8. Border without flowers and the digital reconstruction of the border with gilded tin flowers',
                thumbUrl: 'images/history/history45/720_8.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
