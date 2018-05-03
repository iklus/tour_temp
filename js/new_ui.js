let sky;
let map_overlay;
// Declare action bar UI elements
let action_btn_el;
let robbie;
let action_btn;
let vr_btn;
let captions_btn;
let sound_btn;
let map_btn;
let captions_text;
let map_exit_btn;

let captions_icon;
let sound_icon;

// Declare nav panel UI elements
let nav_panel;
let nav_bar;
let previous_btn;
let next_btn;
let next_icon;

// Declare states
let states = {
    "sound": true,
    "playingAudio": false,
    "captions": true,
    "map": false
}

let current_location_index = 0;
let data;
let tour_id;

function showNavButton(button, state = false, pulse = false) {
    if(state) {
        // Show
        button.style.display = "inline-block";
        if(pulse) {
            button.classList.add("pulse");
        } else {
            button.classList.remove("pulse");
        }
    } else {
        // Hide
        button.style.display = "none";
        button.classList.remove("pulse");
    }
}

function refreshButtons() {
    captions_icon.src = states.captions ? "images/ui/menu-captions-on.svg" : "images/ui/menu-captions-off.svg";
    sound_icon.src = states.sound ? "images/ui/menu-sound-on.svg" : "images/ui/menu-sound-off.svg";
}

function refreshNavPanel() {
    // Disable going back if you are already at the beginning
    if(current_location_index == 0) {
        previous_btn.style.display = "none";
    } else {
        previous_btn.style.display = "inline-block";
    }

    if(current_location_index == data.tours[tour_id].locations.length - 1) {
        next_icon.src = "images/ui/nav-more.svg";
    } else {
        next_icon.src = "images/ui/nav-right.svg";
    }

    let menu_items = document.querySelectorAll(".dropdown-content a");
    menu_items.forEach(function(menu_item) {
        menu_item.className = "";
        if(menu_item.dataset.location == current_location_index) menu_item.className = "current-location";
    });
    nav_bar.innerText = data.locations[data.tours[tour_id].locations[current_location_index]].name;


}

function setState(mode, state) {
    states[mode] = state;
    refreshButtons();
    refreshCaption();
    refreshAudio();
}

function vr_btn_click() {
    var scene = document.querySelector('a-scene');
    if (scene) {
        if (scene.hasLoaded) {
            scene.enterVR();
        } else {
            scene.addEventListener('loaded', scene.enterVR);
        }
    }
}

function captions_btn_click() {
    setState("captions", !states.captions);
}

function sound_btn_click() {
    setState("sound", !states.sound);
}

function nav_panel_click() {
    current_location_index = this.dataset.location;
    setState("captions", !states.captions);
    change_location();
}

function populateNavPanel() {
    let dropdown_content = document.getElementById("dropdown-content");
    let i = 0;
    data.tours[tour_id].locations.forEach(function(location) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.addEventListener("click", nav_panel_click)
        a.dataset.location = i;
        a.appendChild(document.createTextNode(data.locations[location].name));
        li.appendChild(a);
        dropdown_content.appendChild(li);
        let li_divider = document.createElement("li");
        li_divider.className = "divider";
        li_divider.tabIndex = -1;
        dropdown_content.appendChild(li_divider);
        i++;
    });
    change_location();
}

function nav_btn_click() {
    if(this == next_btn && current_location_index == data.tours[tour_id].locations.length - 1) {
        // Handle more button
        window.location.href = "/#tours";
    }
    if(this == previous_btn && current_location_index > 0) {
        current_location_index--;
    }
    if(this == next_btn && current_location_index < data.tours[tour_id].locations.length - 1) {
        current_location_index++;
        this.className = "btn-floating btn-large custom-float-btn";
    }

    console.log(current_location_index);
    change_location();
}

function change_location() {
    setupImage();
    refreshNavPanel();
    refreshAudio();
}

function action_btn_click() {
    // Remove pulse after click
    this.className = "btn-floating btn-large custom-float-btn";
}

function setupImage() {
    let location = data.tours[tour_id].locations[current_location_index];
    sky.setAttribute("material", "src", "#" + location + "360");
    let rotation = data.locations[location].rotation;
    document.getElementById('mainCamera').setAttribute(
        'rotation',
        rotation.x + " " + rotation.y + " " + rotation.z
    );
    refreshCaption();
}

function refreshCaption() {
    let location = data.tours[tour_id].locations[current_location_index];
    captions_text.innerText = data.locations[location].transcript;
    if(captions_text.innerText.length == 0 || states.captions == false || states.map) {
        // Don't show caption
        captions_text.style.display = "none";
    } else {
        captions_text.style.display = "block";
    }
}

function refreshAudio() {
    let location = data.tours[tour_id].locations[current_location_index];
    var sounds = document.getElementsByTagName("audio");
    for(i=0; i<sounds.length; i++) {
        sounds[i].pause();
        sounds[i].currentTime = 0;
    }
    console.log(states.sound);
    if(states.sound && !states.map) {
        setTimeout(function(){document.getElementById(location + "Audio").play();}, 500);
    }
}

function assetsLoaded() {
    document.querySelector(".overlay").style.display = "none";
    setupImage();
    setTimeout(function(){action_btn.close();}, 1500);
    setTimeout(function(){nav_panel.close();}, 1500);
}

function loadAssets() {
    let scene = document.querySelector("a-scene");
    let assets = document.createElement("a-assets");
    assets.addEventListener("loaded", assetsLoaded);
    data.tours[tour_id].locations.forEach(function(location) {
        let imgAsset = document.createElement("img");
        imgAsset.id = location + "360";
        imgAsset.src = "images/360/" + location + ".jpg";
        assets.appendChild(imgAsset);
        let audioAsset = document.createElement("audio");
        audioAsset.id = location + "Audio";
        audioAsset.src = "audio/" + location + ".mp3";
        assets.appendChild(audioAsset);
    });
    scene.appendChild(assets);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function map_exit_btn_click() {
    map_overlay.style.display = "none";
    action_btn_el.style.display = "block";
    setState("map", false);
}

function map_btn_click() {
    setState("map", true);
    openMap();
}

function openMap() {
    map_overlay.style.display = "block";
    action_btn_el.style.display = "none";
}

window.onload = function() {
    // Load JSON
    data = getAllData();

    tour_id = getParameterByName("tour");
    if(!(tour_id in data.tours)) {
        tour_id = "cbdi_inpatient_tour";
    }


    loadAssets();

    sky           = document.getElementById("image-360");
    map_overlay   = document.getElementById("map-overlay");
    map_exit_btn  = document.getElementById("map_exit");
    map_exit_btn.addEventListener("click", map_exit_btn_click);
    // UI Elements
    robbie        = document.getElementById("robbie");
    nav_bar       = document.getElementById("nav_bar");
    previous_btn  = document.getElementById("previous_btn");
    next_btn      = document.getElementById("next_btn");
    next_icon     = document.getElementById("next_icon");
    previous_btn.addEventListener("click", nav_btn_click);
    next_btn.addEventListener("click", nav_btn_click);

    vr_btn        = document.getElementById("vr_btn");
    vr_btn.addEventListener("click", vr_btn_click);
    captions_btn  = document.getElementById("captions_btn");
    captions_btn.addEventListener("click", captions_btn_click);
    sound_btn     = document.getElementById("sound_btn");
    sound_btn.addEventListener("click", sound_btn_click);
    map_btn       = document.getElementById("map_btn");
    map_btn.addEventListener("click", map_btn_click);

    captions_icon = document.getElementById("captions_icon");
    sound_icon    = document.getElementById("sound_icon");

    captions_text = document.getElementById("captions_text");

    refreshButtons();
    populateNavPanel();

    // Setup action button
    action_btn_el = document.querySelector(".fixed-action-btn");
    robbie.addEventListener("mouseup", action_btn_click);
    action_btn = M.FloatingActionButton.init(action_btn_el, {
        direction: "bottom",
        hoverEnabled: false
    });

    // Setup navigation panel
    const dropdown_el = document.querySelector(".dropdown-trigger");
    nav_panel = M.Dropdown.init(dropdown_el, {coverTrigger: false});
    nav_panel._placeDropdown = function () {
        // Updated to fix pop-up
        // Set width before calculating positionInfo
        var idealWidth = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
        this.dropdownEl.style.width = idealWidth + 'px';

        var positionInfo = this._getDropdownPosition();
        this.dropdownEl.style.left = positionInfo.x + 'px';
        this.dropdownEl.style.top = positionInfo.y + 'px';
        this.dropdownEl.style.height = positionInfo.height + 'px';
        this.dropdownEl.style.width = positionInfo.width + 'px';
        this.dropdownEl.style.transformOrigin = (positionInfo.horizontalAlignment === 'left' ? '50%' : '100%') + " " + (positionInfo.verticalAlignment === 'top' ? '0' : '100%');
    };
    nav_panel.open_old = nav_panel.open;
    nav_panel.open = function() {
        setState("captions", false);
        nav_panel.open_old.call(this);
    }
    nav_panel.close_old = nav_panel.close;
    nav_panel.close = function() {
        setState("captions", true);
        nav_panel.close_old.call(this);
    }

    action_btn.open();
    nav_panel.open();

    // Bug fix: nav_panel must be closed when window is resized
    function resizeHandler() {
        nav_panel.close();
    }
    window.addEventListener("resize", resizeHandler);
};