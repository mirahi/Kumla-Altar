'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History74Controller
 * @description
 * # History74Controller
 * Controller for sculptures - st. torkel
 */
angular
    .module('kumlaAltarApp')
    .controller('History74Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history74/720_1.jpg',
                caption: 'St. Torkel, seen from the front side before conservation',
                thumbUrl: 'images/history/history74/720_1.jpg'
            },
            {
                url: 'images/history/history74/720_2.jpg',
                caption: 'St. Torkel, seen from the left side before conservation',
                thumbUrl: 'images/history/history74/720_2.jpg'
            },
            {
                url: 'images/history/history74/720_3.jpg',
                caption: 'St. Torkel, seen from the back side before conservation',
                thumbUrl: 'images/history/history74/720_3.jpg'
            },
            {
                url: 'images/history/history74/720_4.jpg',
                caption: 'St. Torkel, seen from the right side before conservation',
                thumbUrl: 'images/history/history74/720_4.jpg'
            },
            {
                url: 'images/history/history74/720_5.jpg',
                caption: 'St. Torkel, detail photo of the face before conservation',
                thumbUrl: 'images/history/history74/720_5.jpg'
            },
            {
                url: 'images/history/history74/720_6.jpg',
                caption: 'St. Torkel, detail photo of the book. The bell-clapper attribute from the right side hand is missing; before conservation',
                thumbUrl: 'images/history/history74/720_6.jpg'
            },
            {
                url: 'images/history/history74/720_7.jpg',
                caption: 'St. Torkel, detail photo of the bag attached to the belt',
                thumbUrl: 'images/history/history74/720_7.jpg'
            },
            {
                url: 'images/history/history74/720_8.jpg',
                caption: 'St. Torkel, detail photo of feet and the copper green base',
                thumbUrl: 'images/history/history74/720_8.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
