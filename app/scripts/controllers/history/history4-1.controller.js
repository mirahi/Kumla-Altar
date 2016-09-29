'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History41Controller
 * @description
 * # History41Controller
 * Controller for gilding and paint layers
 */
angular
    .module('kumlaAltarApp')
    .controller('History41Controller', function ($scope, Lightbox) {

        var vm = this;

        vm.images = [
            {
                url: 'http://placehold.it/1280x720',
                caption: '1',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };
        
        vm.images2 = [
            {
                url: 'http://placehold.it/1280x720',
                caption: '1',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
