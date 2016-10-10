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
        { url: 'history4-1', title: 'Gilding and paint layers'},
        { url: 'history4-2', title: 'Punch work patterns'},
        { url: 'history4-3', title: 'Close up microscopic photos'},
        { url: 'history4-4', title: 'Tracery'},
        { url: 'history4-5', title: 'Gilded tin flower'},
    ]},
      { url: 'history5', title: 'Annunciation'},
      { url: 'history6', title: 'Passion of The Christ'},
      { url: 'history7', title: 'Sculptures', submenu: [
        { url: 'history7-1', title: 'The Virgin'},
        { url: 'history7-2', title: 'Christ'},
        { url: 'history7-3', title: 'St. Eskil'},
        { url: 'history7-4', title: 'St. Torkel'},
        { url: 'history7-5', title: 'St. Gertrud'},
        { url: 'history7-6', title: 'St. Olov'},
        { url: 'history7-7', title: 'St. Paul'},
        { url: 'history7-8', title: 'St. Peter'},
        { url: 'history7-9', title: 'St. Erik'},
        { url: 'history7-10', title: 'St. Birgitta'},
      ]}
    ];
    
    menuData.conservation = [
      { url: 'conservation1', title: 'Conservation & Treatments' },
      { url: 'conservation2', title: 'Before & After' },
      { url: 'conservation3', title: 'Materials & Tools' }
    ];
    
    menuData.materials = [
      { url: 'materials1', title: 'XRF' },
      { url: 'materials2', title: 'FTIR' },
      { url: 'materials3', title: 'Paint Cross-Sections', submenu: [
        { url: 'materials3-1', title: 'Samples'}
      ]},
      { url: 'materials4', title: 'Summary' }
    ];
    
  });
