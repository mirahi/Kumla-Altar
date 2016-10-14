'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:ProjectController
 * @description
 * # ProjectController
 * Controller for all projects
 */
angular
    .module('kumlaAltarApp')
    .controller('ProjectController', function ($scope, Lightbox) {
        
        var wrapper = document.getElementById('wrapper');
        wrapper.style.backgroundImage = "url('images/backgrounds/project.jpg')";
        
    });
