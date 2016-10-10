'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History7´7Controller
 * @description
 * # History77Controller
 * Controller for sculptures - St. Paul
 */
angular
    .module('kumlaAltarApp')
    .controller('History77Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history77/720_1.jpg',
                caption: 'St. Paul, seen from the front side before conservation',
                thumbUrl: 'images/history/history77/720_1.jpg'
            },
            {
                url: 'images/history/history77/720_2.jpg',
                caption: 'St. Paul, seen from the left side before conservation',
                thumbUrl: 'images/history/history77/720_2.jpg'
            },
            {
                url: 'images/history/history77/720_3.jpg',
                caption: 'St. Paul, seen from the back side before conservation',
                thumbUrl: 'images/history/history77/720_3.jpg'
            },
            {
                url: 'images/history/history77/720_4.jpg',
                caption: 'St. Paul, seen from the right side before conservation',
                thumbUrl: 'images/history/history77/720_4.jpg'
            },
            {
                url: 'images/history/history77/720_5.jpg',
                caption: 'St. Paul, detail photo of the face before conservation',
                thumbUrl: 'images/history/history77/720_5.jpg'
            },
            {
                url: 'images/history/history77/720_6.jpg',
                caption: 'St. Paul, detail photo of the head with a cut off peg with no paint in the middle, before conservation',
                thumbUrl: 'images/history/history77/720_6.jpg'
            },
            {
                url: 'images/history/history77/720_7.jpg',
                caption: 'St. Paul, detail photo of the bottom of the sculpture showing the hollowed out area, before conservation',
                thumbUrl: 'images/history/history77/720_7.jpg'
            },
            {
                url: 'images/history/history77/720_8.jpg',
                caption: 'St. Paul detail photo of the left side hand with a partly missing attribute, a sword?, before conservation',
                thumbUrl: 'images/history/history77/720_8.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
