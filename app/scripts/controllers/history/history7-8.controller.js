'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:History78Controller
 * @description
 * # History78Controller
 * Controller for sculptures - St. Peter
 */
angular
    .module('kumlaAltarApp')
    .controller('History78Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/history.jpg')";

        var vm = this;

        vm.images = [
            {
                url: 'images/history/history78/720_1.jpg',
                caption: 'St. Peter, seen from the front side before conservation',
                thumbUrl: 'images/history/history78/720_1.jpg'
            },
            {
                url: 'images/history/history78/720_2.jpg',
                caption: 'St. Peter, seen from the left side before conservation',
                thumbUrl: 'images/history/history78/720_2.jpg'
            },
            {
                url: 'images/history/history78/720_3.jpg',
                caption: 'St. Peter, seen from the back side before conservation',
                thumbUrl: 'images/history/history78/720_3.jpg'
            },
            {
                url: 'images/history/history78/720_4.jpg',
                caption: 'St. Peter, seen from the right side before conservation',
                thumbUrl: 'images/history/history78/720_4.jpg'
            },
            {
                url: 'images/history/history78/720_5.jpg',
                caption: 'St. Peter, detail photo of the face before conservation',
                thumbUrl: 'images/history/history78/720_5.jpg'
            },
            {
                url: 'images/history/history78/720_6.jpg',
                caption: 'St. Peter, detail photo of the book; a key as an attribute is missing from the right side hand; before conservation',
                thumbUrl: 'images/history/history78/720_6.jpg'
            },
            {
                url: 'images/history/history78/720_7.jpg',
                caption: 'St. Peter, detail photo of the water gilded garment with azurite blue lining before conservation. The gilding with real gold leaf on right side only extends to the parts visible to the viewer. From there on Zwischgold is used and the last section has only reddish brown bole layer without gilding.',
                thumbUrl: 'images/history/history78/720_7.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
