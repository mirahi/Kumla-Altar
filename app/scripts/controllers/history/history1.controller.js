'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History1Controller
 * @description
 * # History1Controller
 * Controller for History of the altar
 */
angular
    .module('kumlaAltarApp')
    .controller('History1Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history1/720_1.jpg',
                caption: 'An image from the Swedish History Museum archives: Kumla church from inside and outside as seen by apainter Anders Abraham Grafström in 1822',
                thumbUrl: 'images/history/history1/720_1.jpg'
            },
            {
                url: 'images/history/history1/720_2.jpg',
                caption: 'The Kumla altar inside the old Kumla church. An aquarelle by Anders Abraham Grafström, 1822',
                thumbUrl: 'images/history/history1/720_2.jpg'
            },
            {
                url: 'images/history/history1/720_3.jpg',
                caption: 'Original hook for one of the sculptures in the corpus of the altar',
                thumbUrl: 'images/history/history1/720_4.jpg'
            },
            {
                url: 'images/history/history1/720_4.jpg',
                caption: 'A modern screw, used as a replacement for an original hook, to attach the sculpture to the back wall of the corpus',
                thumbUrl: 'images/history/history1/720_4.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
