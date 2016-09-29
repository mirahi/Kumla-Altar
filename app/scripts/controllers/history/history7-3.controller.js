'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History73Controller
 * @description
 * # History73Controller
 * Controller for sculptures - st. eskil
 */
angular
    .module('kumlaAltarApp')
    .controller('History73Controller', function ($scope, Lightbox) {

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history7/720_1a.jpg',
                caption: '1',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'images/history/history7/720_1b.jpg',
                caption: '2',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'images/history/history7/720_1c.jpg',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'images/history/history7/720_1d.jpg',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'images/history/history7/720_2.jpg',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'images/history/history7/720_2a.jpg',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'images/history/history7/720_3.jpg',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'images/history/history7/720_4.jpg',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'images/history/history7/720_5.jpg',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'images/history/history7/720_group.jpg',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'images/history/history7/720_coronation.jpg',
                caption: '3',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
