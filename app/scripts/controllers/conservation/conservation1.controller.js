'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:Conservation1Controller
 * @description
 * # Conservation1Controller
 * Controller for conservation and treatments
 */
angular
    .module('kumlaAltarApp')
    .controller('Conservation1Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/conservation.jpg')";

        var vm = this;
        
        vm.images = [
            {
                url: 'images/conservation/conservation1/wax/720_1.jpg',
                caption: 'Cleaning wax',
                thumbUrl: 'images/conservation/conservation1/wax/720_1.jpg'
            },
            {
                url: 'images/conservation/conservation1/wax/720_2.jpg',
                caption: 'Cleaning wax',
                thumbUrl: 'images/conservation/conservation1/wax/720_2.jpg'
            },
            {
                url: 'images/conservation/conservation1/wax/720_3.jpg',
                caption: 'Cleaning wax',
                thumbUrl: 'images/conservation/conservation1/wax/720_3.jpg'
            },
            // cleaning
            {
                url: 'images/conservation/conservation1/cleaning/720_1.jpg',
                thumbUrl: 'images/conservation/conservation1/cleaning/720_1.jpg'
            },
            {
                url: 'images/conservation/conservation1/cleaning/720_2.jpg',
                thumbUrl: 'images/conservation/conservation1/cleaning/720_2.jpg'
            },
            {
                url: 'images/conservation/conservation1/cleaning/720_3.jpg',
                thumbUrl: 'images/conservation/conservation1/cleaning/720_3.jpg'
            },
            {
                url: 'images/conservation/conservation1/cleaning/720_4.jpg',
                thumbUrl: 'images/conservation/conservation1/cleaning/720_4.jpg'
            },
            {
                url: 'images/conservation/conservation1/cleaning/720_5.jpg',
                thumbUrl: 'images/conservation/conservation1/cleaning/720_5.jpg'
            },
            {
                url: 'images/conservation/conservation1/cleaning/720_6.jpg',
                thumbUrl: 'images/conservation/conservation1/cleaning/720_6.jpg'
            },
            {
                url: 'images/conservation/conservation1/cleaning/720_7.jpg',
                thumbUrl: 'images/conservation/conservation1/cleaning/720_7.jpg'
            },
            {
                url: 'images/conservation/conservation1/cleaning/720_8.jpg',
                thumbUrl: 'images/conservation/conservation1/cleaning/720_8.jpg'
            },
            {
                url: 'images/conservation/conservation1/cleaning/720_9.jpg',
                thumbUrl: 'images/conservation/conservation1/cleaning/720_9.jpg'
            },
            {
                url: 'images/conservation/conservation1/cleaning/720_10.jpg',
                thumbUrl: 'images/conservation/conservation1/cleaning/720_10.jpg'
            },
            //consolidation
            {
                url: 'images/conservation/conservation1/consolidation/720_1.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_1.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_2.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_2.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_3.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_3.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_4.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_4.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_5.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_5.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_6.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_6.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_7.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_7.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_8.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_8.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_9.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_9.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_10.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_10.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_11.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_11.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_12.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_12.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_13.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_13.jpg'
            },
            {
                url: 'images/conservation/conservation1/consolidation/720_14.jpg',
                thumbUrl: 'images/conservation/conservation1/consolidation/720_14.jpg'
            },
            //varnishing
            {
                url: 'images/conservation/conservation1/varnishing/720.jpg',
                thumbUrl: 'images/conservation/conservation1/varnishing/720.jpg'
            },
            //retouching
            {
                url: 'images/conservation/conservation1/retouching/720_1.jpg',
                thumbUrl: 'images/conservation/conservation1/retouching/720_1.jpg'
            },
            {
                url: 'images/conservation/conservation1/retouching/720_2.jpg',
                thumbUrl: 'images/conservation/conservation1/retouching/720_2.jpg'
            },
            {
                url: 'images/conservation/conservation1/retouching/720_3.jpg',
                thumbUrl: 'images/conservation/conservation1/retouching/720_3.jpg'
            },
            {
                url: 'images/conservation/conservation1/retouching/720_4.jpg',
                thumbUrl: 'images/conservation/conservation1/retouching/720_4.jpg'
            },
            {
                url: 'images/conservation/conservation1/retouching/720_5.jpg',
                thumbUrl: 'images/conservation/conservation1/retouching/720_5.jpg'
            },
            {
                url: 'images/conservation/conservation1/retouching/720_6.jpg',
                thumbUrl: 'images/conservation/conservation1/retouching/720_6.jpg'
            },
            {
                url: 'images/conservation/conservation1/retouching/720_7.jpg',
                thumbUrl: 'images/conservation/conservation1/retouching/720_7.jpg'
            },
            {
                url: 'images/conservation/conservation1/retouching/720_8.jpg',
                thumbUrl: 'images/conservation/conservation1/retouching/720_8.jpg'
            },
            //construction
            {
                url: 'images/conservation/conservation1/construction/720_1.jpg',
                thumbUrl: 'images/conservation/conservation1/construction/720_1.jpg'
            },
            {
                url: 'images/conservation/conservation1/construction/720_2.jpg',
                thumbUrl: 'images/conservation/conservation1/construction/720_2.jpg'
            },
            {
                url: 'images/conservation/conservation1/construction/720_3.jpg',
                thumbUrl: 'images/conservation/conservation1/construction/720_3.jpg'
            },
            {
                url: 'images/conservation/conservation1/construction/720_4.jpg',
                thumbUrl: 'images/conservation/conservation1/construction/720_4.jpg'
            },
            {
                url: 'images/conservation/conservation1/construction/720_5.jpg',
                thumbUrl: 'images/conservation/conservation1/construction/720_5.jpg'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };
        
        vm.cleaning = [
            {
                url: 'http://placehold.it/1280x720',
                caption: '1.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '4.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '5.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '6.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '7.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '8.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '9.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '10.',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];
        
        $scope.openLightboxModalCleaning = function (index) {
            Lightbox.openModal(vm.cleaning, index);
        };

        vm.consolidation = [
            {
                url: 'http://placehold.it/1280x720',
                caption: '1.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '4.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '5.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '6.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '7.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '8.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '9.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '10.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '11.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '12.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '13.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '14.',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];
        
        $scope.openLightboxModalConsolidation = function (index) {
            Lightbox.openModal(vm.consolidation, index);
        };
        
        vm.varnishing = [
            {
                url: 'http://placehold.it/1280x720',
                caption: '1.',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];
        
        $scope.openLightboxModalVarnishing = function (index) {
            Lightbox.openModal(vm.varnishing, index);
        };
        
        vm.retouching = [
            {
                url: 'http://placehold.it/1280x720',
                caption: '1.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '4.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '5.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '6.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '7.',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '8.',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];
        
        $scope.openLightboxModalRetouching = function (index) {
            Lightbox.openModal(vm.retouching, index);
        };
        
        vm.construction = [
            {
                url: 'http://placehold.it/1280x720',
                caption: '1. Construction',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2. Construction',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3. Construction',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '2. Construction',
                thumbUrl: 'http://placehold.it/150x150'
            },
            {
                url: 'http://placehold.it/1280x720',
                caption: '3. Construction',
                thumbUrl: 'http://placehold.it/150x150'
            }
        ];
        
        $scope.openLightboxModalConstruction = function (index) {
            Lightbox.openModal(vm.construction, index);
        };

    });
