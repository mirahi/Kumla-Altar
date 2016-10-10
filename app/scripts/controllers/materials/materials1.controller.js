'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:Materials1Controller
 * @description
 * # Materials1Controller
 * Controller for XFR
 */
angular
    .module('kumlaAltarApp')
    .controller('Materials1Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/material.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/materials/materials1/720_1.jpg',
                thumbUrl: 'images/materials/materials1/720_1.jpg'
            },
            {
                url: 'images/materials/materials1/720_2.jpg',
                thumbUrl: 'images/materials/materials1/720_2.jpg'
            },
            {
                url: 'images/materials/materials1/720_3.jpg',
                thumbUrl: 'images/materials/materials1/720_3.jpg'
            },
            {
                url: 'images/materials/materials1/720_4.jpg',
                thumbUrl: 'images/materials/materials1/720_4.jpg'
            },
            {
                url: 'images/materials/materials1/720_5.jpg',
                thumbUrl: 'images/materials/materials1/720_5.jpg'
            },
            {
                url: 'images/materials/materials1/720_6.jpg',
                thumbUrl: 'images/materials/materials1/720_6.jpg'
            },
            {
                url: 'images/materials/materials1/720_7.jpg',
                thumbUrl: 'images/materials/materials1/720_7.jpg'
            },
            {
                url: 'images/materials/materials1/720_8.jpg',
                thumbUrl: 'images/materials/materials1/720_8.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
