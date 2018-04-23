/* call-switch AFRAME Component */

/**
 * Takes in a string ('to') and passes it to the switchById function in the sphere-manager attached to a-scene.
 */


AFRAME.registerComponent('call-switch', {
  schema: {
    on: {type: 'string', default: 'click'},
    to: {type: 'string'}
  },

  init: function() {
    var data = this.data;
    var el = this.el;

    var mouseEnter = function() {
      var name = document.querySelector('a-scene').components.manager.data.json[data.to]['name'];
      document.getElementById('mapTitle').setAttribute('text', 'value', name);
    }

    var mouseLeave = function() {
      var activeMap = document.querySelector('a-scene').components.manager.data.activeMap;
      document.getElementById('mapTitle').setAttribute('text', 'value', activeMap);
    }

    el.addEventListener(data.on, function() {
      document.querySelector('a-scene').components.manager.switchById(data.to);
    });

    el.addEventListener("mouseenter", function() { mouseEnter(); });
    el.addEventListener("mouseleave", function() { mouseLeave(); });
    el.addEventListener("mouseup", function() { mouseEnter(); });
    el.addEventListener("mousedown", function() { mouseLeave(); });
  }
});