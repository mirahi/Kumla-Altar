'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:Conservation3Controller
 * @description
 * # Conservation3Controller
 * Controller for conservation materials and tools
 */
angular
    .module('kumlaAltarApp')
    .controller('Conservation3Controller', function ($scope, Lightbox) {

        var vm = this;
        
        vm.images = [
            {
                url: 'images/materials/materials3/720_0.jpg',
                caption: 'Cleaning.',
                thumbUrl: 'images/conservation/720_0.jpg'
            },
            {
                url: 'images/materials/materials3/720_1.jpg',
                caption: 'Cleaning.',
                thumbUrl: 'images/materials/materials3/720_1.jpg'
            },
            {
                url: 'images/materials/materials3/720_2.jpg',
                caption: 'Cleaning.',
                thumbUrl: 'images/materials/materials3/720_2.jpg'
            },
            {
                url: 'images/materials/materials3/720_3.jpg',
                caption: 'Cleaning.',
                thumbUrl: 'images/materials/materials3/720_3.jpg'
            },
            {
                url: 'images/materials/materials3/720_4.jpg',
                caption: 'Cleaning.',
                thumbUrl: 'images/materials/materials3/720_4.jpg'
            },
            {
                url: 'images/materials/materials3/720_5.jpg',
                caption: 'Students and their lecturers working in practical conservation-restoration of the altar.',
                thumbUrl: 'images/materials/materials3/720_5.jpg'
            },
            {
                url: 'images/materials/materials3/720_6.jpg',
                caption: 'The whole project took place in the Swedish History Museum, in the Gothic Hall of a new exhibition for Medieval art.',
                thumbUrl: 'images/materials/materials3/720_6.jpg'
            },
            {
                url: 'images/materials/materials3/720_7.jpg',
                caption: 'The whole project took place in the Swedish History Museum, in the Gothic Hall of a new exhibition for Medieval art.',
                thumbUrl: 'images/materials/materials3/720_7.jpg'
            },
            {
                url: 'images/materials/materials3/720_8.jpg',
                caption: 'Students and their lecturers working in practical conservation-restoration of the altar.',
                thumbUrl: 'images/materials/materials3/720_8.jpg'
            },
            {
                url: 'images/materials/materials3/720_9.jpg',
                caption: 'Students and their lecturers working in practical conservation-restoration of the altar.',
                thumbUrl: 'images/materials/materials3/720_9.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
