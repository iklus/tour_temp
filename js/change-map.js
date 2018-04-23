/* change-map AFRAME Component */

/**
 * Takes in a string ('to') and passes it to the switchById function in the sphere-manager attached to a-scene.
 */


AFRAME.registerComponent('change-map', {
  schema: {
    on: {type: 'string', default: 'click'},
    to: {type: 'string'}
  },

  init: function() {
    var data = this.data;
    var el = this.el;
    el.addEventListener(data.on, function() {
      document.querySelector('a-scene').components.manager.changeMap(data.to);
    });
  }
});