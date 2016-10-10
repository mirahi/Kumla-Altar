'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:Materials31Controller
 * @description
 * # Materials31Controller
 * Controller for Paint Cross-sections
 */
angular
    .module('kumlaAltarApp')
    .controller('Materials31Controller', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/material.jpg')";

        var vm = this;

        vm.images = [
            //p1
            {
                url: 'images/materials/materials31/p1/720_1.jpg',
                caption: 'Area of the soldier´s armour, silver leaf with possible glazing on top',
                thumbUrl: 'images/materials/materials31/p1/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p1/2.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p1/2.jpg'
            },
            {
                url: 'images/materials/materials31/p1/3.jpg',
                caption: 'Microscope image under UV light, magnification 200x',
                thumbUrl: 'images/materials/materials31/p1/3.jpg'
            },
            //p2
            {
                url: 'images/materials/materials31/p2/720_1.jpg',
                caption: 'Area of the green garment on one of Christ´s disciples',
                thumbUrl: 'images/materials/materials31/p2/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p2/2.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p2/2.jpg'
            },
            {
                url: 'images/materials/materials31/p2/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p2/3.jpg'
            },
            {
                url: 'images/materials/materials31/p2/4.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p2/4.jpg'
            },
            //p3
            {
                url: 'images/materials/materials31/p3/720_1.jpg',
                caption: 'Area of the red garment with red glaze on one of Christ`s disciples ',
                thumbUrl: 'images/materials/materials31/p3/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p3/2.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p3/2.jpg'
            },
            {
                url: 'images/materials/materials31/p3/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p3/3.jpg'
            },
            {
                url: 'images/materials/materials31/p3/4.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p3/4.jpg'
            },
            {
                url: 'images/materials/materials31/p3/5.jpg',
                caption: 'Microscope image under UV light, magnification 200x',
                thumbUrl: 'images/materials/materials31/p3/5.jpg'
            },
            //p4
            {
                url: 'images/materials/materials31/p4/P4_720_1.jpg',
                caption: 'Area of the Virgin Mary´s blue garment',
                thumbUrl: 'images/materials/materials31/p4/P4_720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p4/2.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p4/2.jpg'
            },
            {
                url: 'images/materials/materials31/p4/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p4/3.jpg'
            },
            {
                url: 'images/materials/materials31/p4/4.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p4/4.jpg'
            },
            {
                url: 'images/materials/materials31/p4/5.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p4/5.jpg'
            },
            //p5
            {
                url: 'images/materials/materials31/p5/720_1.jpg',
                caption: 'Area of the greyish-violet garment',
                thumbUrl: 'images/materials/materials31/p5/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p5/2.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p5/2.jpg'
            },
            {
                url: 'images/materials/materials31/p5/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p5/3.jpg'
            },
            {
                url: 'images/materials/materials31/p5/4.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p5/4.jpg'
            },
            //p6
            {
                url: 'images/materials/materials31/p6/720_1.jpg',
                caption: 'Area of the decorated border between two painted Passion scenes',
                thumbUrl: 'images/materials/materials31/p6/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p6/2.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p6/2.jpg'
            },
            {
                url: 'images/materials/materials31/p6/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p6/3.jpg'
            },
            {
                url: 'images/materials/materials31/p6/4.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p6/4.jpg'
            },
            {
                url: 'images/materials/materials31/p6/5.jpg',
                caption: 'Microscope image under UV light, magnification 200x',
                thumbUrl: 'images/materials/materials31/p6/5.jpg'
            },
           //p7
            {
                url: 'images/materials/materials31/p7/720_1.jpg',
                caption: 'Area of the soldier´s helmet, silver leaf with a glaze',
                thumbUrl: 'images/materials/materials31/p7/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p7/2.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p7/2.jpg'
            },
            {
                url: 'images/materials/materials31/p7/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p7/3.jpg'
            },
            {
                url: 'images/materials/materials31/p7/4.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p7/4.jpg'
            },
            //p8
            {
                url: 'images/materials/materials31/p8/720_1.jpg',
                caption: 'Area of the oil gilded decoration on a painted frame',
                thumbUrl: 'images/materials/materials31/p8/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p8/2.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p8/2.jpg'
            },
            {
                url: 'images/materials/materials31/p8/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p8/3.jpg'
            },
            {
                url: 'images/materials/materials31/p8/4.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p8/4.jpg'
            },
            {
                url: 'images/materials/materials31/p8/5.jpg',
                caption: 'Microscope image under UV light, magnification 200x',
                thumbUrl: 'images/materials/materials31/p8/5.jpg'
            },
            //p9
            {
                url: 'images/materials/materials31/p9/720_1.jpg',
                caption: 'Area of the yellow cross in Angel Gabriel´s hand',
                thumbUrl: 'images/materials/materials31/p9/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p9/2.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p9/2.jpg'
            },
            {
                url: 'images/materials/materials31/p9/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p9/3.jpg'
            },
            {
                url: 'images/materials/materials31/p9/4.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p9/4.jpg'
            },
            {
                url: 'images/materials/materials31/p9/5.jpg',
                caption: 'Microscope image under UV light, magnification 200x',
                thumbUrl: 'images/materials/materials31/p9/5.jpg'
            },
            //p10
            {
                url: 'images/materials/materials31/p10/720_1.jpg',
                caption: 'Area of the yellow cross in Angel Gabriel´s hand',
                thumbUrl: 'images/materials/materials31/p10/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p10/2.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p10/2.jpg'
            },
            {
                url: 'images/materials/materials31/p10/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p10/3.jpg'
            },
            {
                url: 'images/materials/materials31/p10/4.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p10/4.jpg'
            },
            //p11
            {
                url: 'images/materials/materials31/p11/720_1.jpg',
                caption: 'Area on the body of the dragon, glazed silver leaf',
                thumbUrl: 'images/materials/materials31/p11/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p11/720_2.jpg',
                caption: 'Close up image of the sample area',
                thumbUrl: 'images/materials/materials31/p11/720_2.jpg',
            },
            {
                url: 'images/materials/materials31/p11/3.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p11/3.jpg'
            },
            {
                url: 'images/materials/materials31/p11/4.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p11/4.jpg'
            },
            {
                url: 'images/materials/materials31/p11/5.jpg',
                caption: 'Microscope image under UV light, magnification 200x',
                thumbUrl: 'images/materials/materials31/p11/5.jpg'
            },
            //p12 - a
            {
                url: 'images/materials/materials31/p12/720_1.jpg',
                caption: 'Area of The Angel Gabriel´s green drapery',
                thumbUrl: 'images/materials/materials31/p12/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p12/a/2.jpg',
                caption: 'Microscope image, right side of the sample, magnification 100x',
                thumbUrl: 'images/materials/materials31/p12/a/2.jpg',
            },
            {
                url: 'images/materials/materials31/p12/a/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p12/a/3.jpg'
            },
            {
                url: 'images/materials/materials31/p12/a/4.jpg',
                caption: 'Microscope image, left side of the sample, magnification 100x',
                thumbUrl: 'images/materials/materials31/p12/a/4.jpg'
            },
            {
                url: 'images/materials/materials31/p12/a/5.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p12/a/5.jpg'
            },
            //p12 - b
            {
                url: 'images/materials/materials31/p12/720_1.jpg',
                caption: 'Area of The Angel Gabriel´s green drapery',
                thumbUrl: 'images/materials/materials31/p12/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p12/b/2.jpg',
                caption: 'Microscope image, magnification 100x',
                thumbUrl: 'images/materials/materials31/p12/b/2.jpg'
            },
            {
                url: 'images/materials/materials31/p12/b/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p12/b/3.jpg'
            },
            {
                url: 'images/materials/materials31/p12/b/4.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p12/b/4.jpg'
            },
            //p13
            {
                url: 'images/materials/materials31/p13/720_1.jpg',
                caption: 'Area of The Angel Gabriel´s red sleeve with a red glaze on it',
                thumbUrl: 'images/materials/materials31/p13/720_1.jpg',
            },
            {
                url: 'images/materials/materials31/p13/2.jpg',
                caption: 'Close up image of the sample area',
                thumbUrl: 'images/materials/materials31/p13/2.jpg',
            },
            {
                url: 'images/materials/materials31/p13/3.jpg',
                caption: 'Microscope image under UV light, magnification 100x',
                thumbUrl: 'images/materials/materials31/p13/3.jpg'
            },
            {
                url: 'images/materials/materials31/p13/4.jpg',
                caption: 'Microscope image, magnification 200x',
                thumbUrl: 'images/materials/materials31/p13/4.jpg'
            },
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
