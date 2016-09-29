'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:ConservationController
 * @description
 * # ConservationController
 * Controller for conservation
 */
angular
    .module('kumlaAltarApp')
    .controller('ConservationController', function ($scope, Lightbox) {

        var vm = this;
        
        vm.images = [
            {
                url: 'images/conservation/720_1.jpg',
                caption: 'The whole project took place in the Swedish History Museum, in the Gothic Hall of a new exhibition for Medieval art.',
                thumbUrl: 'images/conservation/720_1.jpg'
            },
            {
                url: 'images/conservation/720_2.jpg',
                caption: 'Students and their lecturers working in practical conservation-restoration of the altar.',
                thumbUrl: 'images/conservation/720_2.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
