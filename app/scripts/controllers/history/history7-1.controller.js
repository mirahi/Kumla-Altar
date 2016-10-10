'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History71Controller
 * @description
 * # History71Controller
 * Controller for sculptures - the virgin
 */
angular
    .module('kumlaAltarApp')
    .controller('History71Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history71/720_1.jpg',
                caption: 'The Virgin Mary, seen from the front side before conservation',
                thumbUrl: 'images/history/history71/720_1.jpg'
            },
            {
                url: 'images/history/history71/720_2.jpg',
                caption: 'The Virgin Mary, seen from the left side before conservation',
                thumbUrl: 'images/history/history71/720_2.jpg'
            },
            {
                url: 'images/history/history71/720_3.jpg',
                caption: 'The Virgin Mary, seen from the back side before conservation',
                thumbUrl: 'images/history/history71/720_3.jpg'
            },
            {
                url: 'images/history/history71/720_4.jpg',
                caption: 'The Virgin Mary, seen from the right side before conservation',
                thumbUrl: 'images/history/history71/720_4.jpg'
            },
            {
                url: 'images/history/history71/720_5.jpg',
                caption: 'The Virgin Mary, detail photo of the face before conservation',
                thumbUrl: 'images/history/history71/720_5.jpg'
            },
            {
                url: 'images/history/history71/720_6.jpg',
                caption: 'The Virgin Mary, detail photo of the water gilded garment with azurite blue lining before conservation',
                thumbUrl: 'images/history/history71/720_6.jpg'
            },
            {
                url: 'images/history/history71/720_7.jpg',
                caption: 'The Virgin Mary, detail photo of the lower part of the sculpture and the bench before conservation',
                thumbUrl: 'images/history/history71/720_7.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
