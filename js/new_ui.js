// Declare action bar UI elements
let action_btn;
let vr_btn;
let captions_btn;
let sound_btn;
let map_btn;

let captions_icon;
let sound_icon;

// Declare nav panel UI elements
let nav_panel;
let previous_btn;
let next_btn;

// Declare states
let states = {
    "sound": true,
    "captions": true,
    "map": false
}


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

window.onload = function() {
    previous_btn  = document.getElementById("previous_btn");
    next_btn      = document.getElementById("next_btn");

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

    // Setup action button
    const action_btn_el = document.querySelector(".fixed-action-btn");
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