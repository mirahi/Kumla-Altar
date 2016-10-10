'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History76Controller
 * @description
 * # History76Controller
 * Controller for sculptures - St. Olov
 */
angular
    .module('kumlaAltarApp')
    .controller('History76Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history76/720_1.jpg',
                caption: 'St. Olov, seen from the front side before conservation',
                thumbUrl: 'images/history/history76/720_1.jpg'
            },
            {
                url: 'images/history/history76/720_2.jpg',
                caption: 'St. Olov, seen from the left side before conservation',
                thumbUrl: 'images/history/history76/720_2.jpg'
            },
            {
                url: 'images/history/history76/720_3.jpg',
                caption: 'St. Olov, seen from the back side before conservation',
                thumbUrl: 'images/history/history76/720_3.jpg'
            },
            {
                url: 'images/history/history76/720_4.jpg',
                caption: 'St. Olov, seen from the right side before conservation',
                thumbUrl: 'images/history/history76/720_4.jpg'
            },
            {
                url: 'images/history/history76/720_5.jpg',
                caption: 'St. Olov, detail photo of the face before conservation',
                thumbUrl: 'images/history/history76/720_5.jpg'
            },
            {
                url: 'images/history/history76/720_6.jpg',
                caption: 'St. Olov, detail photo of the crowned head of the dragon, before conservation',
                thumbUrl: 'images/history/history76/720_6.jpg'
            },
            {
                url: 'images/history/history76/720_7.jpg',
                caption: 'St. Olov, the dragon under his feet, before conservation',
                thumbUrl: 'images/history/history76/720_7.jpg'
            },
            {
                url: 'images/history/history76/720_8.jpg',
                caption: 'St. Olov, detail photo of the gilded garment and belt of the sculpture and the base, before conservation',
                thumbUrl: 'images/history/history76/720_8.jpg'
            },
            {
                url: 'images/history/history76/720_9.jpg',
                caption: 'St. Olov, detail photo of the orb, before conservation',
                thumbUrl: 'images/history/history76/720_9.jpg'
            },
            {
                url: 'images/history/history76/720_10.jpg',
                caption: 'St. Olov, detail photo of the right hand. An ax as an attribute is missing; before conservation',
                thumbUrl: 'images/history/history76/720_10.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
