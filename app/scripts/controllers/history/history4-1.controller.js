'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History41Controller
 * @description
 * # History41Controller
 * Controller for gilding and paint layers
 */
angular
    .module('kumlaAltarApp')
    .controller('History41Controller', function ($scope, Lightbox) {

        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";
        
        var vm = this;

        vm.images = [
            {
                url: 'images/history/history41/720_1.jpg',
                thumbUrl: 'images/history/history41/720_1.jpg'
            },
            {
                url: 'images/history/history41/720_2.jpg',
                thumbUrl: 'images/history/history41/720_2.jpg'
            },
            {
                url: 'images/history/history41/720_3.jpg',
                thumbUrl: 'images/history/history41/720_3.jpg'
            },
            // 33 = painted pattern
            {
                url: 'images/history/history41/720_33.jpg',
                caption: 'Painted pattern',
                thumbUrl: 'images/history/history41/720_33.jpg'
            },
            {
                url: 'images/history/history41/720_4.jpg',
                thumbUrl: 'images/history/history41/720_4.jpg'
            },
            {
                url: 'images/history/history41/720_5.jpg',
                thumbUrl: 'images/history/history41/720_5.jpg'
            },
            {
                url: 'images/history/history41/720_6.jpg',
                thumbUrl: 'images/history/history41/720_6.jpg'
            },
            {
                url: 'images/history/history41/720_7.jpg',
                thumbUrl: 'images/history/history41/720_7.jpg'
            },
            {
                url: 'images/history/history41/720_8.jpg',
                thumbUrl: 'images/history/history41/720_8.jpg'
            },
            {
                url: 'images/history/history41/720_9.jpg',
                thumbUrl: 'images/history/history41/720_9.jpg'
            },
            {
                url: 'images/history/history41/720_10.jpg',
                thumbUrl: 'images/history/history41/720_10.jpg'
            },
            {
                url: 'images/history/history41/720_11.jpg',
                thumbUrl: 'images/history/history41/720_11.jpg'
            },
            {
                url: 'images/history/history41/720_13.jpg',
                thumbUrl: 'images/history/history41/720_13.jpg'
            },
            {
                url: 'images/history/history41/720_15.jpg',
                thumbUrl: 'images/history/history41/720_15.jpg'
            },
            {
                url: 'images/history/history41/720_16.jpg',
                thumbUrl: 'images/history/history41/720_16.jpg'
            },
            {
                url: 'images/history/history41/720_17.jpg',
                thumbUrl: 'images/history/history41/720_17.jpg'
            },
            {
                url: 'images/history/history41/720_18.jpg',
                thumbUrl: 'images/history/history41/720_18.jpg'
            },
            {
                url: 'images/history/history41/720_19.jpg',
                thumbUrl: 'images/history/history41/720_19.jpg'
            },
            {
                url: 'images/history/history41/720_20.jpg',
                thumbUrl: 'images/history/history41/720_20.jpg'
            },
            {
                url: 'images/history/history41/720_21.jpg',
                thumbUrl: 'images/history/history41/720_21.jpg'
            },
            {
                url: 'images/history/history41/720_22.jpg',
                thumbUrl: 'images/history/history41/720_22.jpg'
            },
            {
                url: 'images/history/history41/720_23.jpg',
                thumbUrl: 'images/history/history41/720_23.jpg'
            },
            {
                url: 'images/history/history41/720_24.jpg',
                thumbUrl: 'images/history/history41/720_24.jpg'
            },
            {
                url: 'images/history/history41/720_25.jpg',
                thumbUrl: 'images/history/history41/720_25.jpg'
            },
            {
                url: 'images/history/history41/720_26.jpg',
                thumbUrl: 'images/history/history41/720_26.jpg'
            },
            {
                url: 'images/history/history41/720_27.jpg',
                thumbUrl: 'images/history/history41/720_27.jpg'
            },
            {
                url: 'images/history/history41/720_28.jpg',
                thumbUrl: 'images/history/history41/720_28.jpg'
            },
            {
                url: 'images/history/history41/720_29.jpg',
                thumbUrl: 'images/history/history41/720_29.jpg'
            },
            {
                url: 'images/history/history41/720_30.jpg',
                thumbUrl: 'images/history/history41/720_30.jpg'
            },
            {
                url: 'images/history/history41/720_31.jpg',
                thumbUrl: 'images/history/history41/720_31.jpg'
            },
            {
                url: 'images/history/history41/720_32.jpg',
                thumbUrl: 'images/history/history41/720_32.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };
        

    });
