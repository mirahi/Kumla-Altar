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
                caption: 'Passion of the Christ.',
            },
            {
                url: 'images/history/history6/720_2.jpg',
                caption: 'The Virgin Mary before conservation.',
            },
            {
                url: 'images/history/history6/720_3.jpg',
                caption: 'The Angel Gabriel before conservation',
            },
            {
                url: 'images/history/history6/720_4.jpg',
                caption: 'Detail image, the face of Virgin Mary. Linen cloth, visible in the damaged area of paint where the Virgin Mary´s mouth and lower part of her nose is supposed to be.',
            },
            {
                url: 'images/history/history6/720_5.jpg',
                caption: 'Detail image, white lilies in a vase, symbolizing the purity of the Virgin Mary. Linen cloth, glued on to panel is visible under the ground and paint layers.',
            },
            {
                url: 'images/history/history6/720_6.jpg',
                caption: 'Detail image, the decorative pattern of the foreground on the panel depicting the Virgin Mary',
            },
            {
                url: 'images/history/history6/720_7.jpg',
                caption: 'Detail image, the Angel Gabriel, upper right corner, God the Father within a cloud band.',
                thumbUrl: 'images/history/history6/720_7.jpg'
            },
            {
                url: 'images/history/history6/720_8.jpg',
                caption: 'Detail image, the Angel Gabriel, red background with golden stars. In the side light a dowel holding together two wooden planks under the ground and paint layers is visible.',
                thumbUrl: 'images/history/history6/720_8.jpg'
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
