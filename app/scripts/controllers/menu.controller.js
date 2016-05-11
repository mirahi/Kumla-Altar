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
      { url: 'history2', title: 'Medieval Workshop Practice'},
      { url: 'history3', title: 'Medieval Techniques'},
      { url: 'history4', title: 'Decoration', submenu: [
        { url: 'history4-1', title: 'Decoration 1'},
        { url: 'history4-2', title: 'Decoration 2'},
        { url: 'history4-3', title: 'Decoration 3'},
        { url: 'history4-4', title: 'Decoration 4'},
        { url: 'history4-5', title: 'Decoration 5'},
    ]},
      { url: 'history5', title: 'Annunciation'},
      { url: 'history6', title: 'Passion of The Christ'},
      { url: 'history7', title: 'Sculptures'}
    ];
    
    menuData.history4 = [
        { url: 'history4-1', title: 'Decoration 1'},
        { url: 'history4-2', title: 'Decoration 2'},
        { url: 'history4-3', title: 'Decoration 3'},
        { url: 'history4-4', title: 'Decoration 4'},
        { url: 'history4-5', title: 'Decoration 5'},
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
