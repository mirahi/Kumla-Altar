'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History72Controller
 * @description
 * # History72Controller
 * Controller for sculptures - christ
 */
angular
    .module('kumlaAltarApp')
    .controller('History72Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history72/720_1.jpg',
                caption: 'Christ, seen from the front side before conservation',
                thumbUrl: 'images/history/history72/720_1.jpg'
            },
            {
                url: 'images/history/history72/720_2.jpg',
                caption: 'Christ, seen from the left side before conservation',
                thumbUrl: 'images/history/history72/720_2.jpg'
            },
            {
                url: 'images/history/history72/720_3.jpg',
                caption: 'Christ, seen from the back side before conservation',
                thumbUrl: 'images/history/history72/720_3.jpg'
            },
            {
                url: 'images/history/history72/720_4.jpg',
                caption: 'Christ, seen from the right side before conservation',
                thumbUrl: 'images/history/history72/720_4.jpg'
            },
            {
                url: 'images/history/history72/720_5.jpg',
                caption: 'Christ, detail photo of the face before conservation',
                thumbUrl: 'images/history/history72/720_5.jpg'
            },
            {
                url: 'images/history/history72/720_6.jpg',
                caption: 'Christ, detail photo of the damaged crown and a cut peg in the middle before conservation',
                thumbUrl: 'images/history/history72/720_6.jpg'
            },
            {
                url: 'images/history/history72/720_7.jpg',
                caption: 'Christ, detail photo of the water gilded garment with red lining before conservation',
                thumbUrl: 'images/history/history72/720_7.jpg'
            },
            {
                url: 'images/history/history72/720_8.jpg',
                caption: 'Christ, detail photo of the water gilded orb and a piece of parchment with text under the ground layer and gilding, after cleaning',
                thumbUrl: 'images/history/history72/720_8.jpg'
            },
            {
                url: 'images/history/history72/720_9.jpg',
                caption: 'Christ, detail photo of the lower part of the sculpture',
                thumbUrl: 'images/history/history72/720_9.jpg'
            },
            {
                url: 'images/history/history72/720_10.jpg',
                caption: 'Christ, detail photo, two extra added pieces of wood to the left of the bench',
                thumbUrl: 'images/history/history72/720_10.jpg'
            },
            {
                url: 'images/history/history72/720_11.jpg',
                caption: 'Christ, detail photo three extra added pieces of wood to the right of the bench',
                thumbUrl: 'images/history/history72/720_11.jpg'
            },
            {
                url: 'images/history/history72/720_12.jpg',
                caption: 'Christ, tool marks on the back of the sculpture',
                thumbUrl: 'images/history/history72/720_12.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
