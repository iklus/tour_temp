let a_scene;
let sky;
let map_overlay;
let map_area;
let map_img;
let map_title_text;
let more_overlay;
let more_exit;
let tour_name;
let replay_btn;
let loader;
let enter_tour_btn;
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
let top_help;

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
    "sound": false,
    "captions": true,
    "map": false
}

let current_map_id;
let current_location_index = 0;
let data;
let tour_id;

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
    refreshAudio();
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

function nav_btn_click(direction) {
    action_btn.close();
    if(direction == "next" && current_location_index == data.tours[tour_id].locations.length - 1) {
        // Handle more button
        next_btn.className = "btn-floating btn-large custom-float-btn";
        openMore();
    }
    if(direction == "previous" && current_location_index > 0) {
        current_location_index--;
        change_location();
    }
    if(direction == "next" && current_location_index < data.tours[tour_id].locations.length - 1) {
        current_location_index++;
        next_btn.className = "btn-floating btn-large custom-float-btn";
        change_location();
    }
}

function change_location() {
    setupImage();
    refreshNavPanel();
    refreshMap();
    refreshAudio();

    // Send location to Google Analytics using gtag.js and global gtag function
    let location = data.tours[tour_id].locations[current_location_index];
    gtag('event', 'location_change', {
        'send_to': ['UA-108453755-2'],
        'tour_name': tour_id,
        'location_name': location,
        'event_label': location,
        'event_callback': function() {
            console.log('GTAG--Tour: ' + tour_id + ' Location: ' + location);
        }
    });
}

function action_btn_click() {
    // Remove pulse after click
    this.className = "btn-floating btn-large custom-float-btn";
}

function setupImage() {
    let location = data.tours[tour_id].locations[current_location_index];
    sky.setAttribute("material", "src", "#" + location + "360");
    let rotation = data.locations[location].rotation;
    document.getElementById('player').setAttribute(
        'rotation',
        rotation.x + " " + rotation.y + " " + rotation.z
    );
    refreshCaption();
}

function refreshCaption() {
    let location = data.tours[tour_id].locations[current_location_index];
    var innerText = data.locations[location].transcript;
    if(innerText.length == 0) {
        innerText = "You are at " + data.locations[location].name + ".";
    }
    captions_text.innerText = innerText;
    if(states.captions == false || states.map) {
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
    if (states.sound && !states.map && data.locations[location].transcript != "") {
        document.getElementById(location + "Audio").play();
    }
}

function assetsLoaded() {
    loader.style.display = "none";
    enter_tour_btn.style.visibility = "visible";
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
        if (data.locations[location].transcript != ""){
            let audioAsset = document.createElement("audio");
        audioAsset.id = location + "Audio";
        audioAsset.src = "audio/" + location + ".mp3";
        assets.appendChild(audioAsset);
        }
    });
    Object.keys(data.maps).forEach(function(map_id) {
        let imgAsset = document.createElement("img");
        imgAsset.id = map_id + "-map";
        imgAsset.src = "images/maps/" + map_id + ".png";
        assets.appendChild(imgAsset);
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
    map_overlay.style.visibility = "hidden";
    action_btn_el.style.display = "block";
    setState("map", false);
}

function map_btn_click() {
    setState("map", true);
    openMap();
}

function openMap() {
    refreshMap();
    map_overlay.style.visibility = "visible";
    action_btn_el.style.display = "none";
}

function spot_click() {
    current_location_index = this.dataset.location;
    change_location();
}

function addSpot(x, y, r, location) {
    let div = document.createElement("div");
    div.className = "map-location";
    div.style.height = (r * 2) + "px";
    div.style.width = (r * 2) + "px";
    div.style.borderRadius = r + "px";
    div.style.webkitBorderRadius = r + "px";
    div.style.top = (y - r) + "px";
    div.style.left = (x - r) + "px";
    div.style.borderWidth = Math.floor(r/3) + "px";
    div.style.backgroundColor = (data.tours[tour_id].locations[current_location_index] == location) ? "#73b420" : "transparent";
    div.style.borderColor     = (data.tours[tour_id].locations[current_location_index] == location) ? "#73b420" : "#565A56";
    div.dataset.location = data.tours[tour_id].locations.indexOf(location);
    div.addEventListener("click", spot_click);
    map_overlay.appendChild(div);
}

function refreshSpots() {
    removeSpots();
    placeSpots();
}

function removeSpots() {
    let spots = document.querySelectorAll(".map-location");
    spots.forEach(function(spot) {
       spot.remove();
    });
}

function placeSpots() {
    Object.keys(data.maps[current_map_id].locations).forEach(function(location_id) {
        let location = data.maps[current_map_id].locations[location_id];
        if(data.tours[tour_id].locations.includes(location_id)) {
            placeSpot(location.x, location.y, location_id);
        }
    });
}

function findMap() {
    let location_id = data.tours[tour_id].locations[current_location_index];
    let found_map_id;
    Object.keys(data.maps).forEach(function(map_id) {
        if(found_map_id) return;
        if(Object.keys(data.maps[map_id].locations).includes(location_id)) {
            found_map_id = map_id;
            return;
        }
    });
    current_map_id = found_map_id;
}

function refreshMap() {
    findMap();
    if(current_map_id === undefined) {
        map_img.src = "";
    } else {
        map_title_text.innerText = data.maps[current_map_id].name;
        map_img.src = "images/maps/" + current_map_id + ".png";
        refreshSpots();
    }
}

function placeSpot(x, y, location) {
    // Input x and y are percents of image, all else in px
    let scaleFactor = 40;
    let rendered_x;
    let rendered_y;
    if( (map_img.naturalWidth/map_img.naturalHeight) >
        (map_area.clientWidth/map_area.clientHeight)
    ) {
        // Width constrained
        rendered_x = map_area.clientWidth;
        // Height has padding
        rendered_y = (map_img.naturalHeight/map_img.naturalWidth) * map_area.clientWidth;
    } else {
        // Width has padding
        rendered_x = (map_img.naturalWidth/map_img.naturalHeight) * map_area.clientHeight;

        // Width has padding
        rendered_y = map_area.clientHeight;
    }

    let offsetLeft = (map_area.clientWidth  - rendered_x)/2 + map_area.offsetLeft + (x * rendered_x);
    let offsetTop  = (map_area.clientHeight - rendered_y)/2 + map_area.offsetTop  + (y * rendered_y);

    addSpot(offsetLeft, offsetTop, Math.floor(Math.max(rendered_x, rendered_y) / scaleFactor), location);
}

function more_exit_btn_click() {
    more_overlay.style.visibility = "hidden";
    action_btn_el.style.display = "block";
}

function replay_btn_click() {
    more_exit_btn_click();
    current_location_index = 0;
    change_location();
}

function openMore() {
    map_exit_btn_click();
    action_btn_el.style.display = "none";
    more_overlay.style.visibility = "visible";
    tour_name.innerText = data.tours[tour_id].name;
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
    map_img = document.getElementById("map-img");
    map_area = document.getElementById("map-area");
    map_title_text = document.getElementById("map-title-text");
    // UI Elements
    robbie        = document.getElementById("robbie");
    nav_bar       = document.getElementById("nav_bar");
    previous_btn  = document.getElementById("previous_btn");
    next_btn      = document.getElementById("next_btn");
    next_icon     = document.getElementById("next_icon");
    previous_btn.addEventListener("click", function(){nav_btn_click("previous");});
    next_btn.addEventListener("click", function(){nav_btn_click("next");});

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

    more_overlay  = document.getElementById("more-overlay");
    more_exit     = document.getElementById("more_exit");
    more_exit.addEventListener("click", more_exit_btn_click);
    tour_name     = document.getElementById("tour_name");
    replay_btn    = document.getElementById("replay_btn")
    replay_btn.addEventListener("click", replay_btn_click);
    top_help      = document.getElementById("top-help");

    loader         = document.querySelector(".loader");
    enter_tour_btn = document.getElementById("enter_tour_btn");
    enter_tour_btn.addEventListener("click", function() {
        document.querySelector(".overlay").style.display = "none";
        change_location();
        nav_panel.open();
        action_btn.open();
        setTimeout(function(){action_btn.close();}, 2000);
        setTimeout(function(){nav_panel.close();}, 1000);
    });

    refreshButtons();
    populateNavPanel();

    // Setup action button
    action_btn_el = document.querySelector(".fixed-action-btn");
    robbie.addEventListener("mouseup", action_btn_click);
    action_btn = M.FloatingActionButton.init(action_btn_el, {
        direction: "bottom",
        hoverEnabled: false
    });

    // Setup Arrow Key Support
    document.onkeydown = function(event) {
        switch (event.keyCode) {
            case 37:
                nav_btn_click("previous");
                break;
            case 39:
                nav_btn_click("next");
                break;
            case 77:
                if(states.map) {
                    map_exit_btn_click();
                } else {
                    map_btn_click();
                }
                break;
            case 27:
                if(states.map) map_exit_btn_click();
                break;
        }
    };

    // Called when page is no longer visible
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            setState("sound", false);
            refreshAudio();
        }
      });

    a_scene = document.querySelector("a-scene");
    a_scene.addEventListener("click", function() {
       action_btn.close();
        top_help.style.display = "none";
    });
    a_scene.addEventListener("touchstart", function() {
        action_btn.close();
        top_help.style.display = "none";
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
        action_btn.close();
        setState("captions", false);
        nav_panel.open_old.call(this);
    }
    nav_panel.close_old = nav_panel.close;
    nav_panel.close = function() {
        setState("captions", true);
        nav_panel.close_old.call(this);
    }

    // Bug fix: nav_panel must be closed when window is resized
    function resizeHandler() {
        refreshMap();
        nav_panel.close();
    }
    window.addEventListener("resize", resizeHandler);

};
