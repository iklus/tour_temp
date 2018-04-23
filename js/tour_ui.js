function customEnterVR() {
  var scene = document.querySelector('a-scene');
  if (scene) {
    if (scene.hasLoaded) {
      scene.enterVR();
    } else {
      scene.addEventListener('loaded', scene.enterVR);
    }
  }
}

function toggleRobbie() {
  var robbieElement = document.getElementById("robbie");
  if (robbieElement.style.display === 'none') {
    robbieElement.style.display = 'inline';
  } else {
    robbieElement.style.display = 'none';
  }
}

function clickSoundButton() {
  if (document.querySelector('a-scene').components.manager.data.mute) {
    document.querySelector('a-scene').components.manager.data.mute = false;
    document.getElementById('menu_sound').src ='images/ui/menu_sound_on.png';
    document.querySelector('a-scene').components.manager.playSound();
  } else {
    document.querySelector('a-scene').components.manager.data.mute = true;
    document.getElementById('menu_sound').src ='images/ui/menu_sound_off.png';
    document.querySelector('a-scene').components.manager.pauseSound();
  }
}