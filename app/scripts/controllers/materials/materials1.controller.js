'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:Materials1Controller
 * @description
 * # Materials1Controller
 * Controller for XFR
 */
angular
    .module('kumlaAltarApp')
    .controller('Materials1Controller', function ($scope, Lightbox) {

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
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '4',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '5',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '6',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '7',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '8',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
