/*  Loading Bar Progress is now determined by init in manager.js
var loadingTriggerIDs = ["robbie_body-obj", "map_uc2D", "outside_flag360", "CBDI_1F_Open360", "CBDI_Gantry_UC360", "CBDI_Cyclotron360", "CBDI_2F_Desk2360", "Main_4F_Room10360", "Main_1F_Gates360"];
for (i = 0; i < loadingTriggerIDs.length; i++) {
  alert(loadingTriggerIDs[i]);
  document.getElementById(loadingTriggerIDs[i]).addEventListener('loaded', loadingBar());
}
*/

function formToLink() {
  var checkboxes = document.getElementsByClassName('form-check-input');
  var customLink = window.location.href;
  var selectedBoxes = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedBoxes+=checkboxes[i].value;
      }
    }
    document.getElementById("linkArea").innerHTML = customLink + "?tour=" + selectedBoxes;
}

function createSelections(type, selected) {
  var formHTML = '<div class="col-lg-6 text-center"><h1>';
  if (type == 'done'){
    var customLink = window.location.href;
    var checkboxes = document.getElementsByClassName('form-check-input');
    var selectedBoxes = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedBoxes+=checkboxes[i].value;
      }
    }
    document.getElementById("linkArea").innerHTML = customLink + "?start=" + selected + "&tour=" + selectedBoxes;
    return;
  } else if (type == "radio") {
    formHTML = 'Select Starting Position</h1></div>'
  } else if (type == "checkbox") {
    formHTML = 'Select what positions will be part of the Tour</h1></div>'
  } else {
    alert("Inccorect Type Entered");
  }
  // This determins the order that the areas show up for selection
  var areaGroups = {"outside": [], "childrens": [], "uc": [], "cyclotron": [], "cbdi2F": [], "main1F": [], "main4F": []};
  var jsonData = getData();
  for (var key in jsonData) {
    areaGroups[jsonData[key]["area"]].push(key);
  }
  var areaNum = 0;
  var cbNum = 0;
  for (var area in areaGroups) {
    if (areaNum % 2 == 0) {
      formHTML+='<div class="row">';  // Area row
    }
    formHTML = formHTML + '<div class="col-lg-6"><h1> ' + area + ' </h1>';  // lg-6 Row
    // Goes through all of the locations in an area and creates a checkbox for each one
    for (var i = 0; i < areaGroups[area].length; i++) {
      if (cbNum % 2 == 0) {
        formHTML+='<div class="row">';  // Checkbox row
      }
      // Adds Bootstrap checkbox divs for each spot and fills in the name and id for each one
      formHTML = formHTML + '<div class="col-sm-6"><div class="form-check form-check-inline"><label class="form-check-label"><input class="form-check-input" type="' + type + '" name="spots" id="cb';
      var spot = areaGroups[area][i];
      formHTML = formHTML + cbNum + '" value="' + jsonData[spot]["id"] + '">' + jsonData[spot]["name"] + '</label></div></div>';
      if (cbNum % 2 == 1) {
        formHTML+='</div>';  // Closes checkbox row
      }
      //alert("Area: " + area + " Spot: " + spot + " I: " + i + " cbNum: " + cbNum + " areaNum: " + areaNum);
      cbNum++;
    }
    if (cbNum % 2 == 1) {
      formHTML+='</div>';  // Closes checkbox row if only one checkbox in last row
    }
    cbNum = 0;
    formHTML+='</div>';  // Closes lg-6 row
    if (areaNum % 2 == 1) {
      formHTML+='</div>';  // Closes area row
    }
    areaNum++;
  }
  if (areaNum % 2 == 1) {
    formHTML+='</div>';  // Closes area row if only one checkbox in last row
  }

  // Find start position from radio buttons
  var checkboxes = document.getElementsByClassName('form-check-input');
  var selectedBoxes = "";
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedBoxes+=checkboxes[i].value;
      }
    }

  if (type == "radio") {
    formHTML = formHTML + '<div class="col-lg-12 text-center"><button type="button" class="btn btn-info" onClick="createSelections(\'checkbox\')">Submit</button></div>';
  } else if (type == "checkbox") {
    formHTML = formHTML + '<div class="col-lg-12 text-center"><button type="button" class="btn btn-info" onClick="createSelections(\'done\', \'' + selectedBoxes + '\')">Create Link</button></div>';
  }
  document.getElementById("cbForm").innerHTML = formHTML;
}