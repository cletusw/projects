/*
 * Copyright 2013 The Toolkitchen Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style
 * license that can be found in the LICENSE file.
 */
module.exports = function(grunt) {
  Toolkit = [
    'g-app.html',
    'panel-transitions/g-panel-transition.html',
    'panel-transitions/g-keyframe-panel-transition.html',
    'panel-transitions/g-flow-panel-transition.html',
    'g-panels.html',
    'g-icon.html',
    'g-menu-item.html',
    'g-selection.html',
    'g-selector.html',
    'g-ribbon.html',
    'g-toolbar.html',
    'g-icon-button.html',
    'g-overlay.html',
    'g-menu.html',
    'g-menu-button.html',
    'g-jsonp.html',
  ];
  
  Toolkit = Toolkit.map(function(p) {
    return '../../toolkit/components/' + p;
  });
  
  Pantry = [
    'Speech/g-speech-mic.html',
    'CoolClock/coolclock.html',
    'Stock/stock.html',
    'Weather/wu-weather.html'
  ];
  
  Pantry = Pantry.map(function(p) {
    return '../../pantry/' + p;
  });
  
  
  Pica = [
    'pi-toolbar.html',
    'pi-toolbar-buttons.html',
    'pi-gfeeds.html',
    'pi-feed-aggregator.html',
    'pi-feed-tracker.html',
    'pi-items-view.html',
    'pi-story.html',
    'pi-feed-viewer.html',
    'pi-explore.html',
    'pi-home.html',
    'pi-accounts.html',
    'pi-accounts-model.html',
    'pi-app.html'
  ];
  
  Pica = Pica.map(function(p) {
    return 'components/' + p;
  });
  
  All = [].concat(Toolkit, Pantry, Pica);

  grunt.initConfig({
    concat: {
      Pica: {
        files: {
          'build/pi-build.html': All
        }
      }
    },
    pkg: grunt.file.readJSON('package.json')
  });

  // plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  

  // tasks
  grunt.registerTask('default', ['concat']);
};

