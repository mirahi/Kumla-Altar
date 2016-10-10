'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:Materials3Controller
 * @description
 * # Materials3Controller
 * Controller for Paint Cross-sections
 */
angular
    .module('kumlaAltarApp')
    .controller('Materials3Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/material.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/materials/materials3/720_Cross_sections 1 2 3 4 5 _Christ in Getsemane.jpg',
                caption: 'Cross_sections 1-5 — Christ in Getsemane',
                thumbUrl: 'images/materials/materials3/720_Cross_sections 1 2 3 4 5 _Christ in Getsemane.jpg'
            },
            {
                url: 'images/materials/materials3/720_Cross_sections 6 7 8_Carrying the Cross.jpg',
                caption: 'Cross_sections 6-8 — Carrying the Cross',
                thumbUrl: 'images/materials/materials3/720_Cross_sections 6 7 8_Carrying the Cross.jpg'
            },
            {
                url: 'images/materials/materials3/720_Cross_sections 9 10 _The Angel.jpg',
                caption: 'Cross_sections 9-10 — The Angel',
                thumbUrl: 'images/materials/materials3/720_Cross_sections 9 10 _The Angel.jpg'
            },
            //näytteenottopisteet
            {
                url: 'images/materials/materials3/720_0.jpg',
                thumbUrl: 'images/materials/materials3/720_0.jpg'
            },
            {
                url: 'images/materials/materials3/720_1.jpg',
                thumbUrl: 'images/materials/materials3/720_1.jpg'
            },
            {
                url: 'images/materials/materials3/720_2.jpg',
                thumbUrl: 'images/materials/materials3/720_2.jpg'
            },
            {
                url: 'images/materials/materials3/720_3.jpg',
                thumbUrl: 'images/materials/materials3/720_3.jpg'
            },
            {
                url: 'images/materials/materials3/720_4.jpg',
                thumbUrl: 'images/materials/materials3/720_4.jpg'
            },
            {
                url: 'images/materials/materials3/720_5.jpg',
                thumbUrl: 'images/materials/materials3/720_5.jpg'
            },
            {
                url: 'images/materials/materials3/720_6.jpg',
                thumbUrl: 'images/materials/materials3/720_6.jpg'
            },
            {
                url: 'images/materials/materials3/720_7.jpg',
                thumbUrl: 'images/materials/materials3/720_7.jpg'
            },
            {
                url: 'images/materials/materials3/720_8.jpg',
                thumbUrl: 'images/materials/materials3/720_8.jpg'
            },
            {
                url: 'images/materials/materials3/720_9.jpg',
                thumbUrl: 'images/materials/materials3/720_9.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
