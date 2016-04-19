'use strict';

/**
 * @ngdoc function
 * @name kumlaAltarApp.controller:MenuController
 * @description
 * # MenuController
 * Controller for the main menu URLs and titles
 */
angular
    .module('kumlaAltarApp')
    .controller('MenuController', function () {
    
    var menuData = this;
    
    menuData.home = [
      {}
    ];
    
    menuData.projects = [
      { url: 'project1', title: 'Participants' },
      { url: 'project2', title: 'Funding' },
      { url: 'project3', title: 'Aims & Goals' }
    ];
    
    menuData.history = [
      { url: 'history1', title: 'History of The Altar'},
      { url: 'history2', title: 'Mediaval Workshop Practice'},
      { url: 'history3', title: 'Mediaval Techniques'},
      { url: 'history4', title: 'Decoration'},
      { url: 'history5', title: 'Annunciation'},
      { url: 'history6', title: 'Passion of The Christ'},
      { url: 'history7', title: 'Sculptures'}
    ];
    
    menuData.conservation = [
      { url: 'conservation1', title: 'Conservation & Treatments' },
      { url: 'conservation2', title: 'Before & After' },
      { url: 'conservation3', title: 'Materials & Tools' }
    ];
    
    menuData.materials = [
      { url: 'materials1', title: 'XRF' },
      { url: 'materials2', title: 'FTIR' },
      { url: 'materials3', title: 'Paint Cross-Sections' },
      { url: 'materials4', title: 'Summary' }
    ];
    
  });
