'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History75Controller
 * @description
 * # History75Controller
 * Controller for sculptures - St. Gertrud
 */
angular
    .module('kumlaAltarApp')
    .controller('History75Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history75/720_1.jpg',
                caption: 'St. Gertrud, seen from the front side before conservation',
                thumbUrl: 'images/history/history75/720_1.jpg'
            },
            {
                url: 'images/history/history75/720_2.jpg',
                caption: 'St. Gertrud, seen from the left side before conservation',
                thumbUrl: 'images/history/history75/720_2.jpg'
            },
            {
                url: 'images/history/history75/720_3.jpg',
                caption: 'St. Gertrud, seen from the back side before conservation',
                thumbUrl: 'images/history/history75/720_3.jpg'
            },
            {
                url: 'images/history/history75/720_4.jpg',
                caption: 'St. Gertrud, seen from the right side before conservation',
                thumbUrl: 'images/history/history75/720_4.jpg'
            },
            {
                url: 'images/history/history75/720_5.jpg',
                caption: 'St. Gertrud, detail photo of the face before conservation',
                thumbUrl: 'images/history/history75/720_5.jpg'
            },
            {
                url: 'images/history/history75/720_6.jpg',
                caption: 'St. Gertrud, detail photo of the church she is holding, before conservation',
                thumbUrl: 'images/history/history75/720_6.jpg'
            },
            {
                url: 'images/history/history75/720_7.jpg',
                caption: 'St. Gertrud, detail photo of the water gilded garment with azurite blue lining before conservation',
                thumbUrl: 'images/history/history75/720_7.jpg'
            },
            {
                url: 'images/history/history75/720_8.jpg',
                caption: 'St. Gertrud, detail photo of the lower part of the sculpture and the base',
                thumbUrl: 'images/history/history75/720_8.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
