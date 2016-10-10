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
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history73/720_1.jpg',
                caption: 'St. Eskil, seen from the front side before conservation',
                thumbUrl: 'images/history/history73/720_1.jpg'
            },
            {
                url: 'images/history/history73/720_2.jpg',
                caption: 'St. Eskil, seen from the left side before conservation',
                thumbUrl: 'images/history/history73/720_2.jpg'
            },
            {
                url: 'images/history/history73/720_3.jpg',
                caption: 'St. Eskil, seen from the back side before conservation',
                thumbUrl: 'images/history/history73/720_3.jpg'
            },
            {
                url: 'images/history/history73/720_4.jpg',
                caption: 'St. Eskil, seen from the right side before conservation',
                thumbUrl: 'images/history/history73/720_4.jpg'
            },
            {
                url: 'images/history/history73/720_5.jpg',
                caption: 'St. Eskil, detail photo of the face before conservation',
                thumbUrl: 'images/history/history73/720_5.jpg'
            },
            {
                url: 'images/history/history73/720_6.jpg',
                caption: 'St. Eskil, detail photo of the mitre with white and gilded squares before conservation',
                thumbUrl: 'images/history/history73/720_6.jpg'
            },
            {
                url: 'images/history/history73/720_7.jpg',
                caption: 'St. Eskil, detail photo of the water gilded garment with red lining before conservation',
                thumbUrl: 'images/history/history73/720_7.jpg'
            },
            {
                url: 'images/history/history73/720_8.jpg',
                caption: 'St. Eskil, detail photo of three stones in his hand',
                thumbUrl: 'images/history/history73/720_8.jpg'
            },
            {
                url: 'images/history/history73/720_9.jpg',
                caption: 'St. Eskil, detail photo of the water gilded garment with red lining before conservation',
                thumbUrl: 'images/history/history73/720_9.jpg'
            },
            {
                url: 'images/history/history73/720_10.jpg',
                caption: 'St. Eskil, detail photo, white undergarment with a golden square in front',
                thumbUrl: 'images/history/history73/720_10.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
