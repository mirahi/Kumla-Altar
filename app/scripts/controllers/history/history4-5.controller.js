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
                url: 'http://placehold.it/1280x720',
                caption: '1. Incomplete gilded tin flower',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2. The border',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3. The leaf motive in silver with copper green glaze',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '4. The border between the The Flagellation and the Deposition from the Cross with incomplete gilded tin flowers on both ends of the border',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '5. Molding made of the gilded tin flower',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '6. Molding made of the gilded tin flower',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '7. Border without flowers and the digital reconstruction of the border with gilded tin flowers',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '8. Border without flowers and the digital reconstruction of the border with gilded tin flowers',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
