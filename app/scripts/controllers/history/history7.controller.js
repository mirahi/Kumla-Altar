'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History7Controller
 * @description
 * # History7Controller
 * Controller for sculptures
 */
angular
    .module('kumlaAltarApp')
    .controller('History7Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history7/720_group.jpg',
                caption: 'The sculptures'
            },
            {
                url: 'images/history/history7/720_1a.jpg',
                caption: 'Tool marks from both straight chisels and gouges (concave chisels) and a small axe.'
            },
            {
                url: 'images/history/history7/720_1b.jpg',
                caption: 'The width of the straight chisels vary between 1cm and 4 cm and the width of gouges vary between 1cm and 3,5 cm.'
            },
            {
                url: 'images/history/history7/720_1c.jpg',
                caption: 'The width of the straight chisels vary between 1cm and 4 cm and the width of gouges vary between 1cm and 3,5 cm.'
            },
            {
                url: 'images/history/history7/720_1d.jpg',
                caption: 'The width of the straight chisels vary between 1cm and 4 cm and the width of gouges vary between 1cm and 3,5 cm.'
            },
            {
                url: 'images/history/history7/720_2.jpg',
                caption: 'Remains of a wooden peg'
            },
            {
                url: 'images/history/history7/720_2a.jpg',
                caption: 'Iron hook'
            },
            {
                url: 'images/history/history7/720_3.jpg',
                caption: '3'
            },
            {
                url: 'images/history/history7/720_4.jpg',
                caption: '3',
            },
            {
                url: 'images/history/history7/720_5.jpg',
                caption: '3'
            },
            {
                url: 'images/history/history7/720_coronation.jpg',
                caption: '3'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
