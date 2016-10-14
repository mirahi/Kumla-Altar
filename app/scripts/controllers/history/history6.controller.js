'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History6Controller
 * @description
 * # History6Controller
 * Controller for Annunciation
 */
angular
    .module('kumlaAltarApp')
    .controller('History6Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history6/passion_full.jpg',
                caption: 'Passion of the Christ',
            },
            {
                url: 'images/history/history6/720_1.jpg',
                caption: 'Christ in Gethsemane',
            },
            {
                url: 'images/history/history6/720_2.jpg',
                caption: 'The Flagellation',
            },
            {
                url: 'images/history/history6/720_3.jpg',
                caption: 'Christ before Pilate',
            },
            {
                url: 'images/history/history6/720_4.jpg',
                caption: 'The Carrying of the Cross',
            },
            {
                url: 'images/history/history6/720_5.jpg',
                caption: 'The Crucifixion',
            },
            {
                url: 'images/history/history6/720_6.jpg',
                caption: 'The Deposition from the Cross'
            },
            {
                url: 'images/history/history6/720_7.jpg',
                caption: 'The Entombment'
            },
            {
                url: 'images/history/history6/720_8.jpg',
                caption: 'The Resurrection'
            },
            {
                url: 'images/history/history6/720_9.jpg',
                caption: 'Detail image, the Angel Gabriel, modelling of paint on the sleeve.',
                thumbUrl: 'images/history/history6/720_9.jpg'
            },
            {
                url: 'images/history/history6/720_10.jpg',
                caption: 'Detail image, the Angel Gabriel, upper edge, one of the discoloured red areas on the background.',
                thumbUrl: 'images/history/history6/720_10.jpg'
            },
            {
                url: 'images/history/history6/720_11.jpg',
                caption: 'Detail image, the Angel Gabriel, the fragmented area of the wings.',
                thumbUrl: 'images/history/history6/720_11.jpg'
            },
            {
                url: 'images/history/history6/720_12.jpg',
                caption: 'Detail image, the Angel Gabriel, the oxidized stars on the red background and decoration on the frame where Zwischgold and silver leaf has been used.',
                thumbUrl: 'images/history/history6/720_12.jpg'
            },
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
