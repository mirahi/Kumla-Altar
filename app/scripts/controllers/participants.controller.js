'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:ParticipantsController
 * @description
 * # ParticipantsController
 * Controller for participants
 */
angular
    .module('kumlaAltarApp')
    .controller('ParticipantsController', function ($scope, Lightbox) {

        var vm = this;

        vm.images = [
            {
                url: 'images/project/project1/1_group_metropolia.JPG',
                caption: 'First group of conservation students from Helsinki Metropolia University of Applied Sciences with their lecturer: Anna von Numers, lecturer Tannar Ruuben,Salla Koskiniemi, Aino Sainio, Susanna Belinskij and Naoko Pellinen.'
            },
            {
                url: 'images/project/project1/2_group_metropolia.jpg',
                caption: 'Second group of conservation students from Helsinki Metropolia University of Applied Sciences with their lecturer: Pirjo Leppikangas, Elviira Heikkilä, Arne Rannaoja, lecturer Paula Niskanen, Sanna Kapanen and Jenni Tiipiö.'
            },
            {
                url: 'images/project/project1/3_group_oslo.jpg',
                caption: 'Third group of students from University of Oslo with their lecturer: Oda Grønnesby, Ingeborg Christine Løvdal, Margrethe Rudjord, Lena Porsmo Stoveland, Lise Sæter, Tor Eirik Skaaland.and associate professor Nöelle L. W. Streeton.'
            },
            {
                url: 'images/project/project1/4_group_metropolia_gothenburg.jpg',
                caption: 'First group of conservation students, 4 students from Helsinki Metropolia University of Applied Sciences  and 4 students from University of Gothenburg with their lecturers: Ingrid Sögaard, Lina Danielsson, Emma Imnell, Lu Zyskowska, Saskia Raitala, Ilona Jaaranen, Viivi Vierinen, Veera Lopez-Lehto, lecturer Tannar Ruuben and professor Elizabeth Peacock.'
            },
            {
                url: 'images/project/project1/5_aura_colliander_and_laura_karoniemi.jpg',
                caption: 'Aura Colliander and Laura Karoniemi, two conservation students from Helsinki Metropolia University of Applied Sciences who spent their 3 month internship at the Swedish History Museum and were the key persons to link and follow up the actions of all the 4 groups of students.'
            },
            {
                url: 'images/project/project1/6_hakan_lindberg.jpg',
                caption: 'Håkan Lindberg, conservator from the Swedish History Museum, who coordinated the whole project.'
            },
            {
                url: 'images/project/project1/7_tannar_ruuben.jpg',
                caption: 'Tannar Ruuben, senior lecturer of paintings conservation from Helsinki Metropolia University of Applied Sciences, Finland.'
            },
            {
                url: 'images/project/project1/8_elizabeth_peacock.jpg',
                caption: 'Elizabeth Peacock, professor of conservation, University of Gothenburg, Sweden.'
            }
        ];
        
        $scope.openLightboxModal = function (index) {
            Lightbox.openModal(vm.images, index);
        };

    });
