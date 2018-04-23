/* manager AFRAME Component */

/**
 * This component sets up an event listener for every sphere that manages
 * hiding the spheres and repositioning them.  
 */



AFRAME.registerComponent('manager', {
  schema: {
    on: {type: 'string', default: 'click'},
    current: {type: 'string', default: 'outside_mainEntrance'},
    sky: {type: 'selector'},
    dur: {type: 'number', default: 0},
    locations: {type: 'array'},
    maps: {type: 'map'},
    activeMap: {type: 'string', default: 'none'},
    scriptVisible: {type: 'bool', default: true},
    json: {type: 'map'},
    tour: {type: 'array', default: ['p02','a01','a04','a08','a14','a17','a10','a09','a12'] },
    tourKeys: {type: 'map', default: {'id': "scene"}},
    hide: {type: 'map', default: {'x': 0, 'y': -200, 'z': 0}},
    mute: {type: 'bool', default: false},
    audio: {},
  },

  init: function() {
    var data = this.data;
    var el = this.el;
    data.sky = document.querySelector('a-sky');
    data.json = getData();

    for(var key in data.json) {
      if(data.tour.includes(data.json[key]["id"])) {
        data.tourKeys[data.json[key]["id"]] = key;
      }
    }
    data.current = data.tourKeys[data.tour[0]];
    this.switchById(data.current);
  },

  // Manages switching between scenes and changing the assets
  switchById: function(key) {
    var data = this.data;
    var el = this.el;
    // Get scene data from JSON
    data.current = key;
    var locationData = data.json[key];
    var connections = locationData['connections'];
    // Change the background
    this.changeImage(key);
    // Change rotation
    var rotateCamera = function(locData) {document.getElementById('mainCamera').setAttribute('rotation', locData["rotate"])};
    rotateCamera(locationData);
    // Switches Script
    //el.sceneEl.querySelector("#scriptBubble").setAttribute('position', { "x": 5, "y": 4.5, "z": 8});
    if(data.json[data.current]['script'] != "") {
      this.pauseSound();
    }
    this.changeScript();

    // Send location to Google Analytics using gtag.js and global gtag function
    gtag('event', 'location_change', {
      'send_to': ['UA-108453755-2'],
      'location_key': key,
      'location_name': locationData['name'],
      'event_label': locationData['name'],
      'event_callback': function() {
        console.log('gtag worked!  Key: ' + key + ' Name: ' + locationData['name']);
      }
    });
  },

  tourStep: function(direction) {
    var data = this.data;
    var el = this.el;

    var currentID = data.json[data.current]["id"];
    var index = data.tour.indexOf(currentID);
    if (index === -1) {index = 0;}
    if (direction === 'previous') {
      index-=1;
      if (index < 0) {index = 0;}
      this.switchById(data.tourKeys[data.tour[index]]);
    } else if (direction === 'next') {
      index+=1;
      if (index >= data.tour.length) {index = data.tour.length-1;}
      this.switchById(data.tourKeys[data.tour[index]]);
    }
  },


  // Changes the sky image
  changeImage: function(key) {
    var data = this.data;
    data.sky.setAttribute('material', 'src', '#'+key+'360');
  },

  // Changes Script visibility
  toggleScript: function() {
    var data = this.data;
    var el = this.el;
    if(data.scriptVisible){
      document.getElementById("robbieText").style.display = "none";
      if(data.json[data.current]['script'] != "" && data.audio) {
        this.pauseSound();
      }
      data.scriptVisible = false;
    } else {
      this.changeScript();
      document.getElementById("robbieText").style.display = "block";
      data.scriptVisible = true;
    }
  },

  // Changes Script and plays voice over audio
  changeScript: function() {
    var data = this.data;
    var el = this.el;
    // Pause Audio if there is any
    this.pauseSound();
    if (data.scriptVisible) {
      var script = data.json[data.current]['script'];
      if(script == "") {
        script = "You are at " + data.json[data.current]['name'];
      } else {
        data.audio = new Audio('audio/' + data.current + '.mp3');
        this.playSound();
      }
      document.getElementById("robbieText").innerHTML = script;
      document.getElementById("locationText").innerHTML = data.json[data.current]['name'];
      // For Debug --- document.getElementById("locationText").innerHTML = 'Id: ' + data.json[data.current]['id'];
    }
  },

  playSound: function() {
    var data = this.data;
    var el = this.el;
    if (data.audio && !data.mute) {
      data.audio.play();
    }
  },

  pauseSound: function() {
    var data = this.data;
    var el = this.el;
    if(data.audio && !data.audio.paused) {
      data.audio.pause();
    }
  },

});