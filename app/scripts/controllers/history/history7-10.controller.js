'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History710Controller
 * @description
 * # History710Controller
 * Controller for sculptures - St. Birgitta
 */
angular
    .module('kumlaAltarApp')
    .controller('History710Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history710/720_1.jpg',
                caption: 'St. Birgitta, seen from the front side after conservation',
                thumbUrl: 'images/history/history710/720_1.jpg',
            },
            {
                url: 'images/history/history710/720_2.jpg',
                caption: 'St. Birgitta, seen from the left side after conservation',
                thumbUrl: 'images/history/history710/720_2.jpg',
            },
            {
                url: 'images/history/history710/720_3.jpg',
                caption: 'St. Birgitta, seen from the back side after conservation',
                thumbUrl: 'images/history/history710/720_3.jpg',
            },
            {
                url: 'images/history/history710/720_4.jpg',
                caption: 'St. Birgitta, seen from the right side after conservation',
                thumbUrl: 'images/history/history710/720_4.jpg',
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
