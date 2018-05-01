// Declare action bar UI elements
let action_btn_el;
let robbie;
let action_btn;
let vr_btn;
let captions_btn;
let sound_btn;
let map_btn;

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
    "captions": true,
    "map": false
}

let current_location_index = 0;
let data;

// TODO: Get this from GET parameters
let tour_id = "cbdi_inpatient_tour";

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
}

function vr_btn_click() {
    // Do what we need to enable VR
}

function captions_btn_click() {
    setState("captions", !states.captions);
}

function sound_btn_click() {
    setState("sound", !states.sound);
}

function map_btn_click() {
    setState("map", true);
}

function nav_panel_click() {
    current_location_index = this.dataset.location;
    refreshNavPanel();
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
    refreshNavPanel();
}

function nav_btn_click() {
    if(this == previous_btn && current_location_index > 0) {
        current_location_index--;
    }
    if(this == next_btn && current_location_index < data.tours[tour_id].locations.length - 1) {
        current_location_index++;
        this.className = "btn-floating btn-large custom-float-btn";
    }
    if(this == next_btn && current_location_index == data.tours[tour_id].locations.length - 1) {
        // Handle more button
        console.log("More button clicked!");
    }
    console.log(current_location_index);
    refreshNavPanel();
}

function action_btn_click() {
    // Remove pulse
    this.className = "btn-floating btn-large custom-float-btn";
}

function loadedAssets() {
    console.log(this);
}
function addAssets() {
    let scene = document.querySelector("a-scene");
    let assets = document.createElement("a-assets");
    assets.addEventListener("loaded",loadedAssets);
    data.tours[tour_id].locations.forEach(function(location) {
        let asset = document.createElement("img");
        asset.addEventListener("load",loadedAssets);
        asset.id = location;
        asset.src = "images/360/" + location + ".jpg";
        assets.appendChild(asset);
    });
    scene.appendChild(assets);
}

window.onload = function() {
    // Load JSON
    data = getAllData();

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
    // Bug fix: nav_panel must be closed when window is resized
    function resizeHandler() {
        nav_panel.close();
    }
    window.addEventListener("resize", resizeHandler);
};