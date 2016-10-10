'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History79Controller
 * @description
 * # History79Controller
 * Controller for sculptures - St. Erik
 */
angular
    .module('kumlaAltarApp')
    .controller('History79Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history79/720_1.jpg',
                caption: 'St. Erik, seen from the front side before conservation',
                thumbUrl: 'images/history/history79/720_1.jpg',
            },
            {
                url: 'images/history/history79/720_2.jpg',
                caption: 'St. Erik, seen from the left side before conservation',
                thumbUrl: 'images/history/history79/720_2.jpg',
            },
            {
                url: 'images/history/history79/720_3.jpg',
                caption: 'St. Erik, seen from the back side before conservation',
                thumbUrl: 'images/history/history79/720_3.jpg',
            },
            {
                url: 'images/history/history79/720_4.jpg',
                caption: 'St. Erik, seen from the right side before conservation',
                thumbUrl: 'images/history/history79/720_4.jpg',
            },
            {
                url: 'images/history/history79/720_5.jpg',
                caption: 'St. Erik, detail photo of the face before conservation',
                thumbUrl: 'images/history/history79/720_5.jpg'
            },
            {
                url: 'images/history/history79/720_6.jpg',
                caption: 'St. Erik, detail photo of the crown with a cut peg in the middle, before conservation',
                thumbUrl: 'images/history/history79/720_6.jpg'
            },
            {
                url: 'images/history/history79/720_7.jpg',
                caption: 'St. Erik, detail photo of the base of the sculpture with tool marks, before conservation',
                thumbUrl: 'images/history/history79/720_7.jpg'
            },
            {
                url: 'images/history/history79/720_8.jpg',
                caption: 'St. Erik, detail photo of the base of the sculpture with tool marks, before conservation',
                thumbUrl: 'images/history/history79/720_8.jpg'
            },
            {
                url: 'images/history/history79/720_9.jpg',
                caption: 'St. Erik, detail photo of the lower part of the sculpture, feet and the base',
                thumbUrl: 'images/history/history79/720_9.jpg'
            },
            {
                url: 'images/history/history79/720_10.jpg',
                caption: 'St. Erik, detail photo of the gilded garment with a fur imitation; under the left side sleeve there is a gilded area followed by a brown painted area',
                thumbUrl: 'images/history/history79/720_10.jpg'
            },
            {
                url:  'images/history/history79/720_11.jpg',
                caption: 'St. Erik, detail photo of the gilded garment with a fur imitation; under the right side sleeve the area has been painted with the blue fur imitation – a gilders´ mistake corrected by painter?',
                thumbUrl: 'images/history/history79/720_11.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
