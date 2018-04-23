// Contains all of the data for each scene
  function getData() {
    return eval({

     // --------------------- Outside ---------------------

      "outside_cdbiDoors": {
        "id": "p01", "name": "Building B Enternace", "area": "outside",
        "connections": {
          "outside_g_entrance": { "x": 73, "y": -2, "z": 68},
          "outside_mainEntrance": { "x": -45, "y": 0, "z": 89},
          "outside_flag": { "x": -24, "y": -4, "z": 97},
          "outside_sidewalk": { "x": 98, "y": -4, "z": 19},
          "CBDI_1F_Gates": { "x": 15, "y": -4, "z": -99},
        },
        "rotate": "0 0 0", "script": "Welcome to Cincinnati Children's Liberty Campus.",
      },
      
      "outside_flag": {
        "id": "p02", "name": "Flagpole", "area": "outside",
        "connections": {
          "outside_g_entrance": { "x": 85, "y": 0, "z": 53},
          "outside_mainEntrance": { "x": -69, "y": 0, "z": 72},
          "outside_cdbiDoors": { "x": 48, "y": 0, "z": -87},
          "Main_1F_Gates": { "x": -100, "y": 0, "z": 9},
        },
        "rotate": "12.032 82.162 0", "script": "",
      },
      
      "outside_g_chess": {
        "id": "p03", "name": "Chess Board", "area": "outside",
        "connections": {
          "outside_g_fork": { "x": -97, "y": -8, "z": 24},
          "outside_g_end": { "x": 99, "y": -8, "z": 16},
        },
        "rotate": "0 0 0", "script": "",
      },
      
      "outside_g_catStatue": {
        "id": "p04", "name": "Cat Statue", "area": "outside",
        "connections": {
          "outside_g_end": { "x": -59, "y": -10, "z": 81},
        },
        "rotate": "0 0 0", "script": "",
      },
      
      "outside_g_end": {
        "id": "p05", "name": "Garden Exit", "area": "outside",
        "connections": {
          "outside_g_chess": { "x": -99, "y": -4, "z": -12},
          "outside_g_ironStatue": { "x": -80, "y":-2, "z": -60},
          "outside_g_catStatue": { "x": 75, "y": -8, "z": -66},
          "outside_g_greenStatue": { "x": 48, "y": -8, "z": 87},
        },
        "rotate": "0 0 0", "script": "",
      },
      
      "outside_g_entrance": {
        "id": "p06", "name": "Garden Entrance", "area": "outside",
        "connections": {
          "outside_mainEntrance": { "x": -34, "y": 0, "z": -94},
          "outside_cdbiDoors": { "x": 76, "y": 0, "z": -65},
          "outside_sidewalk": { "x": 48, "y": -2, "z": -14},
          "outside_g_grass": { "x": -13.5, "y": -6, "z": 21},
          "outside_flag": { "x": 33, "y": 0, "z": -95},
        },
        "rotate": "0 0 0", "script": "",
      },
      
      "outside_g_fork": {
        "id": "p07", "name": "Garden Pathway Fork", "area": "outside",
        "connections": {
          "outside_g_redStatue": { "x": -34, "y": -8, "z": -94},
          "outside_g_chess": { "x": 99, "y": -8, "z": -12},
        },
        "rotate": "0 0 0", "script": "",
      },
      
      "outside_g_grass": {
        "id": "p08", "name": "Garden Pathway", "area": "outside",
        "connections": {
          "outside_g_entrance": { "x": 17.25, "y": -6, "z": -18.25},
          "outside_g_ironStatue": { "x": 2, "y": -3, "z": 100},
          "outside_g_redStatue": { "x": -36, "y": -3, "z": 96},
        },
        "rotate": "0 0 0", "script": "",
      },
      
      "outside_g_greenStatue": {
        "id": "p09", "name": "Green Statue", "area": "outside",
        "connections": {
          "outside_g_end": { "x": -62, "y": -10, "z": -79},
        },
        "rotate": "0 0 0", "script": "",
      },
      
      "outside_g_ironStatue": {
        "id": "p10", "name": "Iron Statue", "area": "outside",
        "connections": {
          "outside_g_redStatue": { "x": -22, "y": -8, "z": 97},
          "outside_g_end": { "x": 99, "y": -2, "z": 14},
          "outside_g_grass": { "x": -98, "y": -8, "z": 17},
        },
        "rotate": "0 0 0", "script": "",
      },
      
      "outside_g_redStatue": {
        "id": "p11", "name": "Red Statue", "area": "outside",
        "connections": {
          "outside_g_ironStatue": { "x": 10, "y": -8, "z": -99},
          "outside_g_fork": { "x": 56, "y": -8, "z": 83},
          "outside_g_grass": { "x": -97, "y": -4, "z": -22},
        },
        "rotate": "0 0 0", "script": "",
      },
      
      "outside_mainEntrance": {
        "id": "p12", "name": "Front Walkway", "area": "outside",
        "connections": {
          "outside_flag": {x:43, y: 0, z: -90},
          "outside_g_entrance": {x: 86, y: 0, z: -50},
        },
        "rotate": "0 0 0", "script": "", /*"This is the main entrance to the proton therapy building."*/
      },

      
      "outside_sidewalk": {
        "id": "p13", "name": "Sidewalk", "area": "outside",
        "connections": {
          "outside_cdbiDoors": { "x": -54, "y": 0, "z": -84},
          "outside_g_entrance": { "x": -5, "y": 0, "z": 100},
          "outside_flag": { "x": -99, "y": 0, "z": -10},
        },
        "rotate": "0 0 0", "script": "",
      },

     // --------------------- CBDI 1st Floor ---------------------


      "CBDI_1F_CampusInfo": {
        "id": "b01", "name": "Campus Info Board", "area": "childrens",
        "connections": {
          "CBDI_1F_Open": { "x": -99, "y": 0, "z": -13},
          "CBDI_1F_Stairs": { "x": 8, "y": 0, "z": -100},
          "CBDI_1F_Elevators": { "x": 73, "y": 0, "z": -68},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "CBDI_1F_Desk": {
        "id": "b02", "name": "Building B Lobby", "area": "childrens",
        "connections": {
          "CBDI_1F_Desk2": { "x": -1, "y": 0, "z": 100},
          "CBDI_1F_FamilyCenter": { "x": -87, "y": 0, "z": 49},
          "CBDI_1F_Open": { "x": 46, "y": 0, "z": -89},
        },
        "rotate": "0 0 0", "script": "This is the registration desk. You will check in here before going to your Proton Therapy or Cancer & Blood Diseases appointment.",
      },
    
      "CBDI_1F_Desk2": {
        "id": "b03", "name": "Building B Front Desk", "area": "childrens",
        "connections": {
          "CBDI_1F_Desk": { "x": 5, "y": 0, "z": -100},
          "CBDI_1F_FamilyCenter": { "x": -99, "y": 0, "z": -12},
          "CBDI_1F_Dome": { "x": -12, "y": 0, "z": 99},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "CBDI_1F_Dome": {
        "id": "b04", "name": "Past Front Desk", "area": "childrens",
        "connections": {
          "CBDI_1F_Desk2": { "x": 0, "y": 0, "z": -100},
          "CBDI_1F_Hallway3": { "x": 100, "y": 0, "z": 3},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "CBDI_1F_Elevators": {
        "id": "b05", "name": "Floor 1B Elevators", "area": "childrens",
        "connections": {
          "CBDI_1F_Stairs": { "x": -100, "y": 0, "z": 2},
          "CBDI_1F_CampusInfo": { "x": -71, "y": 0, "z": 71},
        },
        "rotate": "0 0 0", "script": "This leads to the second floor where you will find the Outpatient Cancer & Blood Diseases Clinic.",
      },
    
      "CBDI_1F_Gates": {
        "id": "b06", "name": "Building B Gates", "area": "childrens",
        "connections": {
          "outside_cdbiDoors": { "x": -93, "y": 0, "z": -37},
          "CBDI_1F_Open": { "x": -2, "y": 0, "z": 100},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "CBDI_1F_FamilyCenter": {
        "id": "b07", "name": "Family Center", "area": "childrens",
        "connections": {
          "CBDI_1F_Desk2": { "x": 99, "y": 0, "z": -11},
          "CBDI_1F_FamilyCenter2": { "x": -30, "y": 0, "z": 95},
        },
        "rotate": "0 0 0", "script": "This is the Family Resource Center. This is where families can take time away to work or relax.",
      },
    
      "CBDI_1F_FamilyCenter2": {
        "id": "b08", "name": "Family Center Back", "area": "childrens",
        "connections": {
          "CBDI_1F_FamilyCenter": { "x": 35, "y": 0, "z": -94},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "CBDI_1F_Open": {
        "id": "b09", "name": "Building B Lobby Area", "area": "childrens",
        "connections": {
          "CBDI_1F_Gates": { "x": -4, "y": 0, "z": -100},
          "CBDI_1F_Desk": { "x": -62, "y": 0, "z": 78},
          "CBDI_1F_CampusInfo": { "x": 100, "y": 0, "z": 6},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "CBDI_1F_Stairs": {
        "id": "b10", "name": "Floor 1B Stairs", "area": "childrens",
        "connections": {
          "CBDI_1F_CampusInfo": { "x": 2, "y": 0, "z": 100},
          "CBDI_1F_Elevators": { "x": 97, "y": 0, "z": -25},
          "CBDI_2F_Elevators": { "x": -9, "y": 0, "z": -97},
        },
        "rotate": "0 0 0", "script": "This leads to the second floor where you will find the Outpatient Cancer & Blood Diseases Clinic.",
      },

      "CBDI_1F_Hallway1": {
        "id": "b11", "name": "Hallway", "area": "childrens",
        "connections": {
          "CBDI_1F_Hallway3": { "x": -100, "y": 0, "z": 4},
          "CBDI_1F_Hallway5": { "x": 100, "y": 0, "z": -3},
          "CBDI_1F_Hallway2": { "x": -3, "y": 0, "z": -100},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_1F_Hallway2": {
        "id": "b12", "name": "Hallway", "area": "childrens",
        "connections": {
          "CBDI_1F_Hallway1": { "x": 43, "y": 0, "z": 90},
          "CBDI_1F_Hallway4": { "x": -90, "y": 0, "z": 44},
          "CBDI_1F_Hallway6": { "x": 90, "y": 0, "z": -44},
          "CBDI_Gantry_ChildrensEntrance": { "x": -51, "y": 0, "z": -86},
          "CBDI_Gantry_ChildrensControls": { "x": 63, "y": 0, "z": -77},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_1F_Hallway3": {
        "id": "b13", "name": "Children's CBDI Desk", "area": "childrens",
        "connections": {
          "CBDI_1F_Hallway1": { "x": 99, "y": 0, "z": -16},
          "CBDI_1F_Trees": { "x": -100, "y": 0, "z": -4},
          "CBDI_1F_Dome": { "x": 5, "y": 0, "z": 100},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_1F_Hallway4": {
        "id": "b14", "name": "Hallway near Empty Gantry", "area": "childrens",
        "connections": {
          "CBDI_1F_Hallway2": { "x": 98, "y": 0, "z": -21},
          "CBDI_Gantry_EmptyHallway": { "x": -77, "y": 0, "z": -63}, // Replace later
        },
        "rotate": "0 0 0", "script": "This is the Recovery Bay. After anesthesia, patients come here to recover. It can be separated into two areas by a curtain for privacy.",
      },

      "CBDI_1F_Hallway5": {
        "id": "b15", "name": "UCMC CBDI Hallway", "area": "uc",
        "connections": {
          "CBDI_1F_Hallway1": { "x": -100, "y": 0, "z": 8},
          "CBDI_1F_Hallway6": { "x": -8, "y": 0, "z": -100},
          "CBDI_1F_Hallway7": { "x": 100, "y": 0, "z": -8},
        },
        "rotate": "0 0 0", "script": "",
      },


      "CBDI_1F_Hallway6": {
        "id": "b16", "name": "Hallway near UCMC Gantry", "area": "uc",
        "connections": {
          "CBDI_1F_Hallway5": { "x": 28, "y": 0, "z": 96},
          "CBDI_1F_Hallway8": { "x": 96, "y": 0, "z": -29},
          "CBDI_1F_Hallway2": { "x": -96, "y": 0, "z": 28},
          "CBDI_Gantry_UCEntrance": { "x": -23, "y": 0, "z": -97},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_1F_Hallway7": {
        "id": "b17", "name": "UCMC CBDI Deck", "area": "uc",
        "connections": {
          "CBDI_1F_Hallway5": { "x": -100, "y": 0, "z": 6},
          "CBDI_1F_Hallway8": { "x": -5, "y": 0, "z": -100},
          "CBDI_UC_Chairs": { "x": 6, "y": 0, "z": 100},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_1F_Hallway8": {
        "id": "b18", "name": "Hallway near Research Gantry", "area": "uc",
        "connections": {
          "CBDI_1F_Hallway7": { "x": 3, "y": 0, "z": 100},
          "CBDI_1F_Hallway6": { "x": -100, "y": 0, "z": 3},
          "CBDI_Cyclotron_ControlEntrance": { "x": 100, "y": 0, "z": -2},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_1F_Trees": {
        "id": "b19", "name": "Celebration Garden", "area": "childrens",
        "connections": {
          "CBDI_1F_Hallway3": { "x": 100, "y": 0, "z": -3},
        },
        "rotate": "0 0 0", "script": "On the last day of treatment, we celebrate in the Celebration Garden.",
      },

    
     // --------------------- CDBI 1F UCMC Health ---------------------

      "CBDI_UC_Chairs": {
        "id": "b01", "name": "UCMC Waiting Area", "area": "uc",
        "connections": {
          "CBDI_1F_Hallway7": {"x": 54, "y": 0, "z": -84},
          "CBDI_UC_WaitingArea": { "x": 91, "y": 0, "z": 41},
        },
        "rotate": "0 0 0", "script": "",
      },


      "CBDI_UC_Entrance": {
        "id": "b02", "name": "UCMC Entrance", "area": "uc",
        "connections": {
          "CBDI_UC_FrontDesk": { "x": -98, "y": 0, "z": -21},
          "outside_g_end": { "x": -13, "y": 0, "z": 99}, // Replace later
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_UC_FrontDesk": {
        "id": "b03", "name": "UCMC Front Desk", "area": "uc",
        "connections": {
          "CBDI_UC_Lobby": { "x": -10, "y": 0, "z": -100},
          "CBDI_UC_Entrance": { "x": 87, "y": 0, "z": 49},
        },
        "rotate": "0 0 0", "script": "The right side of the Proton Therapy Building is home to the adult care side at University of Cincinnati Medical Center.",
      },

      "CBDI_UC_Lobby": {
        "id": "b04", "name": "UCMC Lobby", "area": "uc",
        "connections": {
          "CBDI_UC_WaitingArea": { "x": 94, "y": 0, "z": -34},
          "CBDI_UC_FrontDesk": { "x": 39, "y": 0, "z": 92},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_UC_WaitingArea": {
        "id": "b05", "name": "UCMC Lobby Hallway", "area": "uc",
        "connections": {
          "CBDI_UC_Chairs": { "x": -77, "y": 0, "z": -64},
          "CBDI_UC_Lobby": {"x": 99, "y": 0, "z": 10},
        },
        "rotate": "0 0 0", "script": "",
      },

     // --------------------- CDBI 1F UCMC Gantry ---------------------
      
      "CBDI_Gantry_UCEntrance": {
        "id": "b06", "name": "UCMC Gantry Entrance", "area": "cyclotron",
        "connections": {
          "CBDI_1F_Hallway6": { "x": 55, "y": 0, "z": 84},
          "CBDI_Gantry_UCHallway": { "x": -78, "y": 0, "z": 62},
        },
        "rotate": "0 0 0", "script": "This is the entrance to the gantry of the UCMC.  A gantry uses a proton beam to destroy cancer cells while minimizing damage to surrounding healthy tissue and organs.",
      },

      "CBDI_Gantry_UCHallway": {
        "id": "b07", "name": "UCMC Gantry Hallway", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_UCEntrance": { "x": 100, "y": 0, "z": -6},
          "CBDI_Gantry_UC": { "x": -6, "y": 0, "z": -100},
        },
        "rotate": "0 0 0", "script": "This winding hallway made of thick concrete walls is here to absorb any secondary radiation.",
      },

      "CBDI_Gantry_UC": {
        "id": "b08", "name": "UCMC Gantry", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_UCHallway": { "x": 99, "y": 0, "z": 16},
          "CBDI_Gantry_UCBehind": { "x": -100, "y": 0, "z": 2},
          "CBDI_Gantry_UCBack": { "x": 42, "y": 0, "z": -91},
        },
        "rotate": "0 0 0", "script": "Here radiation therapy staff help patients prepare for treatment.  First, imaging is performed to aim the proton beam, and then the treatment is delivered.",
      },

      "CBDI_Gantry_UCBehind": {
        "id": "b09", "name": "UCMC Gantry Back", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_UC": { "x": -61, "y": 0, "z": 79},
        },
        "rotate": "0 0 0", "script": "In proton therapy, the protons enter the body at a lower intensity than x-rays, and stop when they reach the tumor delivering a majority of the dose to the targeted area.",
      },

      "CBDI_Gantry_UCBack": {
        "id": "b10", "name": "UCMC Gantry Machinery", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_UC": { "x": -94, "y": 0, "z": 35},
        },
        "rotate": "0 0 0", "script": "",
      },

     // --------------------- CDBI 1F Empty Gantry ---------------------
 
      "CBDI_Gantry_EmptyEnt": { // Replace Later
        "id": "b11", "name": "Empty Gantry Entrance", "area": "cyclotron",
        "connections": {
          "CBDI_1F_Hallway4": { "x": 100, "y": 0, "z": 100},
          "CBDI_Gantry_EmptyHallway": { "x": 100, "y": 0, "z": 100},
        },
        "rotate": "0 0 0", "script": "This is the entrance to an empty gantry.  This room was left empty in case Children's ever wanted to add a fourth gantry.",
      },

      "CBDI_Gantry_EmptyHallway": {
        "id": "b12", "name": "Empty Gantry Hallway", "area": "cyclotron",
        "connections": {
          "CBDI_1F_Hallway4": { "x": 52, "y": 0, "z": 86},  // Replace Later
          "CBDI_Gantry_Empty": { "x": 87, "y": 0, "z": -49},
        },
        "rotate": "0 0 0", "script": "This winding hallway made of thick concrete walls is here to absorb any secondary radiation.",
      },

      "CBDI_Gantry_Empty": {
        "id": "b13", "name": "Empty Gantry", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_EmptyHallway": { "x": 68, "y": 0, "z": 73},
          "CBDI_Gantry_EmptyBack": { "x": 80, "y": 0, "z": -60},
        },
        "rotate": "0 0 0", "script": "This large empty room show just how much space a gantry takes up.",
      },

      "CBDI_Gantry_EmptyBack": {
        "id": "b14", "name": "Empty Gantry Back", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_Empty": { "x": -47, "y": 0, "z": 88},
        },
        "rotate": "0 0 0", "script": "",
      },

     // --------------------- CDBI 1F Childrens Gantry ---------------------
 
      "CBDI_Gantry_ChildrensControls": {
        "id": "b15", "name": "Childrens Gantry Control Room", "area": "cyclotron",
        "connections": {
          "CBDI_1F_Hallway2": { "x": -85, "y": 0, "z": 52},
        },
        "rotate": "0 0 0", "script": "External control roon Here is where the gantry is controlled by members of your care team during treatment delivery, so you the patient can feel safe knowing they are watching from close by.",
      },

      "CBDI_Gantry_ChildrensEntrance": {
        "id": "b16", "name": "Childrens Gantry Entrance", "area": "cyclotron",
        "connections": {
          "CBDI_1F_Hallway2": { "x": -25, "y": 0, "z": 97},
          "CBDI_Gantry_ChildrensHallway": { "x": -96, "y": 0, "z": -27},
        },
        "rotate": "0 0 0", "script": "This is the entrance to the gantry of Cincinnati Children's.  A gantry uses a proton beam to destroy cancer cells while minimizing damage to surrounding healthy tissue and organs in a process called proton therapy.",
      },

      "CBDI_Gantry_ChildrensHallway": {
        "id": "b17", "name": "Childrens Gantry Hallway", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_ChildrensEntrance": { "x": 97, "y": 0, "z": -23},
          "CBDI_Gantry_Childrens": { "x": -24, "y": 0, "z": -97},
        },
        "rotate": "0 0 0", "script": "This winding hallway made of thick concrete walls is here to absorb any secondary radiation.",
      },

      "CBDI_Gantry_Childrens": {
        "id": "b18", "name": "Childrens Gantry", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_ChildrensHallway": { "x": -48, "y": 0, "z": 87},
          "CBDI_Gantry_ChildrensBehind": { "x": 31, "y": 0, "z": -95},
          "CBDI_Gantry_ChildrensBack": { "x": 71, "y": 0, "z": 71},
        },
        "rotate": "0 0 0", "script": "Here radiation therapy staff help patients prepare for treatment.  First, imaging is performed to aim the proton beam, and then the treatment is delivered.",
      },

      "CBDI_Gantry_ChildrensBehind": {
        "id": "b19", "name": "Childrens Gantry Back", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_Childrens": { "x": -42, "y": 0, "z": 91},
        },
        "rotate": "0 0 0", "script": "In proton therapy, the protons enter the body at a lower intensity that x-rays, and stop when they reach the tumor delivering a majority of the dose to the targeted area.",
      },

      "CBDI_Gantry_ChildrensBack": {
        "id": "b20", "name": "Childrens Gantry Machinery", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_Childrens": { "x": -70, "y": 0, "z": 72},
          "CBDI_Gantry_ChildrensVeryBack": { "x": -43, "y": 0, "z": -90},
        },
        "rotate": "0 0 0", "script": "This is the inner workings of a gantry.  The large machinery allows the entire gantry to be rotated so that the proton beam can get into any tight spot that is needed.",
      },

      "CBDI_Gantry_ChildrensVeryBack": {
        "id": "b21", "name": "Childrens Gantry Machinery Back", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_ChildrensBack": { "x": -6, "y": 0, "z": 100},
        },
        "rotate": "0 0 0", "script": "Here is where the beam line connects to the back of the gantry.",
      },

     // --------------------- CDBI Research Gantry ---------------------

      "CBDI_Gantry_Research": {
        "id": "b22", "name": "Research Gantry", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_ResearchBack": { "x": 30, "y": 0, "z": -95},
          "CBDI_Gantry_ResearchHallway": { "x": 6, "y": 0, "z": 100},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_Gantry_ResearchBack": {
        "id": "b23", "name": "Research Gantry Back", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_Research": { "x": -32, "y": 0, "z": 95},
        },
        "rotate": "0 0 0", "script": "This gantry is similar in size and function to the other two gantries.",
      },

      "CBDI_Gantry_ResearchHallway": {
        "id": "b24", "name": "Research Gantry Hallway", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_Research": { "x": -13, "y": 0, "z": -99},
          "CBDI_Gantry_ResearchEntrance": { "x": 99, "y": 0, "z": 15},
        },
        "rotate": "0 0 0", "script": "This winding hallway made of thick concrete walls is here to absorb any secondary radiation.",
      },

      "CBDI_Gantry_ResearchEntrance": {
        "id": "b25", "name": "Research Gantry Entrance", "area": "cyclotron",
        "connections": {
          "CBDI_Gantry_ResearchHallway": { "x": -96, "y": 0, "z": 29},
          "CBDI_Gantry_Research": { "x": 29, "y": 0, "z": 96},
        },
        "rotate": "0 0 0", "script": "This is the entrance to the research gantry.  This gantry is one of the only gantries in the world to be dedicated for research.",
      },

      "CBDI_CT-Scan": {
        "id": "b26", "name": "Childrens CT Scanner", "area": "childrens",
        "connections": {
          "CBDI_Gantry_Research": { "x": 34, "y": 0, "z": -94},
        },
        "rotate": "0 0 0", "script": "In proton therapy treatment, a CT scan is taken first so that the doctors can figure out the best path for the proton beam to travel.",
      },



     // --------------------- CDBI 1F Cyclotron Images ---------------------

      "CBDI_Cyclotron_ControlEntrance": {
        "id": "b27", "name": "Cyclotron Control Room Entrance", "area": "cyclotron",
        "connections": {
          "CBDI_1F_Hallway4": { "x": -33, "y": 0, "z": -94},
          "CBDI_Cyclotron_ControlRoom": { "x": -97, "y": 0, "z": 23},
          "CBDI_Cyclotron_Doors": { "x": 23, "y": 0, "z": 97},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_Cyclotron_ControlRoom": {
        "id": "b28", "name": "Cyclotron Control Room", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_ControlEntrance": { "x": 82, "y": 0, "z": -57},
        },
        "rotate": "0 0 0", "script": "Here is where the cyclotron is controlled and monitored.",
      },

      "CBDI_Cyclotron_Doors": {
        "id": "b29", "name": "Cyclotron Entrance", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_HallwayStart": { "x": 63, "y": 0, "z": -78},
          "CBDI_Cyclotron_ControlEntrance": { "x": -62, "y": 0, "z": -78},
        },
        "rotate": "0 0 0", "script": "This leads to the cyclotron which is where the proton beams for the gantries are created.",
      },

      "CBDI_Cyclotron_HallwayStart": {
        "id": "b30", "name": "Cyclotron Halway Start", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_Doors": { "x": 20, "y": 0, "z": 98},
          "CBDI_Cyclotron_Hallway1": { "x": -99, "y": 0, "z": 17},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_Cyclotron_Hallway1": {
        "id": "b31", "name": "Cyclotron Hallway", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_HallwayStart": { "x": 100, "y": 0, "z": 2},
          "CBDI_Cyclotron_Hallway2": { "x": 10, "y": 0, "z": -100},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_Cyclotron_Hallway2": {
        "id": "b32", "name": "Cyclotron Hallway", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_Hallway1": { "x": 15, "y": 0, "z": 99},
          "CBDI_Cyclotron_Hallway3": { "x": 96, "y": 0, "z": -29},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_Cyclotron_Hallway3": {
        "id": "b33", "name": "Cyclotron Hallway", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_Hallway2": { "x": -59, "y": 0, "z": 80},
          "CBDI_Cyclotron_HallwayEnd": { "x": -74, "y": 0, "z": -67},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_Cyclotron_HallwayEnd": {
        "id": "b34", "name": "Cyclotron Hallway End", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_Hallway3": { "x": -21, "y": 0, "z": 98},
          "CBDI_Cyclotron": { "x": -76, "y": 0, "z": -65},
        },
        "rotate": "0 0 0", "script": "This is the cyclotron and beam line.  The cyclotron is a type of particle accelerator that creates a proton beam and the beam line delivers the beam to the gantries for proton therapy.",
      },

      "CBDI_Cyclotron": {
        "id": "b35", "name": "Cyclotron and Beam Line", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_StairsBottem": { "x": -100, "y": 0, "z": -8},
          "CBDI_Cyclotron_HallwayEnd": { "x": -20, "y": 0, "z": 98},
          "CBDI_Cyclotron_FirstDoor": { "x": 99, "y": 0, "z": 12},
        },
        "rotate": "0 0 0", "script": "The larger cylinder is the cyclotron and the long stainless steel tube to the right of it is the beam line.",
      },

      "CBDI_Cyclotron_Pump": {
        "id": "b36", "name": "Cyclotron Pump", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_StairsTop": { "x": 42, "y": 0, "z": -91},
        },
        "rotate": "0 0 0", "script": "The cyclotron accelerates protons using a static magnetic field and a rapidly changing electric field.",
      },

      "CBDI_Cyclotron_StairsBottem": {
        "id": "b37", "name": "Cyclotron Stairs Bottem", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron": { "x": -22, "y": 0, "z": 98},
          "CBDI_Cyclotron_StairsTop": { "x": 32, "y": 0, "z": -95},
        },
        "rotate": "0 0 0", "script": "The particle beam is made up of protons taken from hydrogen atoms.",
      },

      "CBDI_Cyclotron_StairsTop": {
        "id": "b38", "name": "Cyclotron Stairs Top", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_StairsBottem": { "x": -94, "y": 0, "z": 34},
          "CBDI_Cyclotron_Pump": { "x": -23, "y": 0, "z": 97},
        },
        "rotate": "0 0 0", "script": "A hydrogen atom is made up of one proton and one electron.  The cyclotron removes the electron and sends the proton down the beam line.",
      },

      "CBDI_Cyclotron_FirstDoor": {
        "id": "b39", "name": "Beam Line Door 1", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron": { "x": -71, "y": 0, "z": 70},
          "CBDI_Cyclotron_Corner": { "x": 31, "y": 0, "z": -95},
        },
        "rotate": "0 0 0", "script": "The beam line carries the proton beam inside of a vacuum sealed two inch pipe.",
      },

      "CBDI_Cyclotron_Corner": {
        "id": "b40", "name": "Beam Line Turn", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_FirstDoor": { "x": 96, "y": 0, "z": -29},
          "CBDI_Cyclotron_SecondDoor": { "x": -47, "y": 0, "z": 88},
          "CBDI_Cyclotron_OppositeSide": { "x": -13, "y": 0, "z": 99},
        },
        "rotate": "0 0 0", "script": "The beam line accelerates the proton beam to two thirds the speed of light.",
      },

      "CBDI_Cyclotron_SecondDoor": {
        "id": "b41", "name": "Beam Line Door 2", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_Corner": { "x": -57, "y": 0, "z": -82},
          "CBDI_Cyclotron_Middle": { "x": 64, "y": 0, "z": 77},
        },
        "rotate": "0 0 0", "script": "The beam line contains magnets to focus and bend the proton beam to the correct specifications.",
      },

      "CBDI_Cyclotron_OppositeSide": {
        "id": "b42", "name": "Connection to Research Gantry", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_Corner": { "x": 17, "y": 0, "z": -98},
        },
        "rotate": "0 0 0", "script": "Here is where the beam line enters the back of the research gantry.",
      },

      "CBDI_Cyclotron_Middle": {
        "id": "b43", "name": "Beam Line", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_SecondDoor": { "x": 95, "y": 0, "z": -31},
          "CBDI_Cyclotron_End": { "x": -93, "y": 0, "z": 37},
        },
        "rotate": "0 0 0", "script": "",
      },

      "CBDI_Cyclotron_End": {
        "id": "b44", "name": "Beam Line End", "area": "cyclotron",
        "connections": {
          "CBDI_Cyclotron_Middle": { "x": 77, "y": 0, "z": 64},
        },
        "rotate": "0 0 0", "script": "",
      },

     // --------------------- CBDI 2st Floor ---------------------

      "CBDI_2F_Circles": {
        "id": "b45", "name": "Outpatient Clinic Entrance", "area": "cbdi2F",
        "connections": {
          "CBDI_2F_Elevators": { "x": 60, "y": 0, "z": -80},
          "CBDI_2F_Desk1": { "x": -13, "y": 0, "z": 99},
          "CBDI_2F_Stairs": { "x": 19, "y": 0, "z": -98},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "CBDI_2F_Desk1": {
        "id": "b46", "name": "Outpatient Triage Desk ", "area": "cbdi2F",
        "connections": {
          "CBDI_2F_Circles": { "x": -12, "y": 0, "z": -99},
          "CBDI_2F_Desk2": { "x": 85, "y": 0, "z": 53},
          "CBDI_2F_KitchenHall": { "x": -48, "y": 0, "z": 88},
        },
        "rotate": "0 0 0", "script": "This is the Outpatient Triage Desk.",
      },
    
      "CBDI_2F_Desk2": {
        "id": "b47", "name": "Triage Desk Side", "area": "cbdi2F",
        "connections": {
          "CBDI_2F_Desk1": { "x": -96, "y": 0, "z": -29},
          "CBDI_2F_KitchenHall": { "x": -63, "y": 0, "z": 78},
        },
        "rotate": "0 0 0", "script": "When a patient first arrives at the outpatient center, his or her vitals are checked here.",
      },
    
      "CBDI_2F_Elevators": {
        "id": "b48", "name": "Floor 2B Elevators", "area": "cbdi2F",
        "connections": {  // Replace Later
          "CBDI_2F_Elevators": { "x": 60, "y": 0, "z": 80},
          "CBDI_2F_Elevators": { "x": 60, "y": 0, "z": 80},
          "CBDI_2F_Elevators": { "x": 60, "y": 0, "z": 80},
        },
        "rotate": "0 0 0", "script": "This leads to the first floor where you will find the proton therapy gantries, cyclotron, and registration desk.",
      },
    
      "CBDI_2F_HallMid": { 
        "id": "b49", "name": "Outpaitent Hallway", "area": "cbdi2F",
        "connections": {  // Replace Later
          "CBDI_2F_Elevators": { "x": 60, "y": 0, "z": 80},
          "CBDI_2F_Elevators": { "x": 60, "y": 0, "z": 80},
          "CBDI_2F_Elevators": { "x": 60, "y": 0, "z": 80},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "CBDI_2F_KitchenHall": {
        "id": "b50", "name": "Nutrition Room Entrance", "area": "cbdi2F",
        "connections": {
          "CBDI_2F_Desk1": { "x": 0, "y": 0, "z": -100},
          "CBDI_2F_NS1": { "x": 0, "y": 0, "z": 100},
          "CBDI_2F_Kitchen": { "x": -28, "y": 0, "z": 96},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "CBDI_2F_Kitchen": {
        "id": "b51", "name": "Nutrition Room", "area": "cbdi2F",
        "connections": {
          "CBDI_2F_KitchenHall": { "x": -99, "y": 0, "z": 13},
        },
        "rotate": "0 0 0", "script": "This is the nutrition room.  Snacks from here are available upon request.",
      },
    
      "CBDI_2F_NS1": {
        "id": "b52", "name": "Nurse Station Top Right", "area": "cbdi2F",
        "connections": {
          "CBDI_2F_NS2": { "x": -93, "y": 0, "z": -36},
          "CBDI_2F_RoomChair": { "x": 99, "y": 0, "z": -16},
        },
        "rotate": "0 0 0", "script": "There are eleven outpatient rooms.",
      },
    
      "CBDI_2F_NS2": {
        "id": "b53", "name": "Outpatient Room Entrance", "area": "cbdi2F",
        "connections": {
          "CBDI_2F_NS1": { "x": 99, "y": 0, "z": -11},
          "CBDI_2F_RoomBed": { "x": -25, "y": 0, "z": -97},
        },
        "rotate": "0 0 0", "script": "All rooms are equipped to meet your clinical needs.",
      },
    
      "CBDI_2F_RoomBed": {
        "id": "b54", "name": "Outpatient Room", "area": "cbdi2F",
        "connections": {
          "CBDI_2F_NS2": { "x": -59, "y": 0, "z": 80},
        },
        "rotate": "0 0 0", "script": "The rooms are equiped with Telemedicine, which allows patients to video call their doctor in other buildings or on main campus.",
      },
    
      "CBDI_2F_RoomChair": {
        "id": "b55", "name": "Outpatient Room 2", "area": "cbdi2F",
        "connections": {
          "CBDI_2F_NS1": { "x": -85, "y": 0, "z": -53},
        },
        "rotate": "0 0 0", "script": "The rooms are equiped with the Get Well Network on TV.  This will greet patients as they enter the room and has access to multiple streaming options.",
      },
    
      "CBDI_2F_Stairs": {
        "id": "b56", "name": "Floor 2B Stairs", "area": "cbdi2F",
        "connections": {
          "CBDI_2F_Circles": { "x": -20, "y": 0, "z": 98},
          "CBDI_2F_Elevators": { "x": 90, "y": 0, "z": -43},
          "CBDI_1F_Stairs": { "x": 7, "y": 0, "z": -100},
        },
        "rotate": "0 0 0", "script": "",
      },
    
     // --------------------- Liberty Main Building 1th Floor ---------------------

      "Main_1F_Desk": {
        "id": "a01", "name": "Welcome Desk", "area": "main1F",
        "connections": {
          "Main_1F_Elevators": { "x": -88, "y": 0, "z": 47},
          "Main_1F_Lobby": { "x": -100, "y": 0, "z": -3},
          "Main_1F_Gates": { "x": 4, "y": 0, "z": 100},
        },
        "rotate": "-0.573 26.7 0", "script": "Here is the welcome desk of the Liberty A building",
      },
    
      "Main_1F_Elevators": {
        "id": "a02", "name": "Floor 1A Elevators", "area": "main1F",
        "connections": {
          "Main_4F_Elevators": { "x": -72, "y": 0, "z": 69},
          "Main_1F_Lobby": { "x": -14, "y": 0, "z": -99},
          "Main_1F_Desk": { "x": 78, "y": 0, "z": -63},
        },
        "rotate": "0 0 0", "script": "This leads to the fourth floor where you will find the inpatient unit.",
      },
    
      "Main_1F_Gates": {
        "id": "a03", "name": "Building A Entrance", "area": "main1F",
        "connections": {
          "Main_1F_Desk": { "x": -2, "y": 0, "z": -100},
          "outside_flag": { "x": 0, "y": 0, "z": 100},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "Main_1F_Lobby": {
        "id": "a04", "name": "Building A Lobby", "area": "main1F",
        "connections": {
          "Main_1F_Desk": { "x": 100, "y": 0, "z": -5},
          "Main_1F_Elevators": { "x": -19, "y": 0, "z": 98},
        },
        "rotate": "-1.719 43.545 0", "script": "Further down is the cafeteria.",
      },
    
     // --------------------- Liberty Main Building 4th Floor --------------------- 
    
      "Main_4F_Room10Hallway": {
        "id": "a05", "name": "Inpatient Room Entrance", "area": "main4F",
        "connections": {
          "Main_4F_Room10": { "x": -100, "y": 0, "z": 2},
          "Main_4F_Room06Hallway": { "x": -2, "y": 0, "z": 100},
        },
        "rotate": "0 0 0", "script": "Your care team will determine whether it is safe for you to leave your inpatient room.",
      },
    
      "Main_4F_BreakRoomHallway": {
        "id": "a06", "name": "Inpatient Hallway End", "area": "main4F",
        "connections": {
          "Main_4F_BreakRoom": { "x": -30, "y": 0, "z": 95},
          "Main_4F_StarDomeHallway": { "x": 64, "y": 0, "z": -77},
          "Main_4F_PlayRoom": { "x": -96, "y": 0, "z": 28},
          "Main_4F_Room06Hallway": { "x": 2, "y": 0, "z": -100},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "Main_4F_ElevatorLobby": {
        "id": "a07", "name": "Inpatient Registration Desk", "area": "main4F",
        "connections": {
          "Main_4F_SpaceStation": { "x": -100, "y": 0, "z": -2},
          "Main_4F_StarDomeHallway": { "x": 45, "y": 0, "z": -89},
          "Main_4F_WaitingArea": { "x": 100, "y": 0, "z": -3},
          "Main_4F_Elevators": { "x": 6, "y": 0, "z": 100},
        },
        "rotate": "0 0 0", "script": "This is the inpatient registration desk.  They will get you checked in for your inpatient stay.",
      },
    
      "Main_4F_Elevators": {
        "id": "a08", "name": "Floor 4A Elevators", "area": "main4F",
        "connections": {
          "Main_4F_ElevatorLobby": { "x": 2, "y": 0, "z": -100},
          "Main_1F_Elevators": { "x": -77, "y": 0, "z": 63},
        },
        "rotate": "0.688 8.594 0", "script": "This leads to the first floor where you will find the first floor welcome desk and cafeteria.",
      },
    
      "Main_4F_NurseStation": {
        "id": "a09", "name": "Nurses Station", "area": "main4F",
        "connections": {
          "Main_4F_StarDome": { "x": 100, "y": 0, "z": -2},
          "Main_4F_Room06Hallway": { "x": 1, "y": 0, "z": -100},
          "Main_4F_BreakRoomHallway": { "x": 0, "y": 0, "z": 100},
        },
        "rotate": "-0.688 -867.343 0", "script": "Here is the nurses station.  From here the healthcare team can see the entire hallway and coordinate care for the unit.",
      },
    
      "Main_4F_PlayRoom": {
        "id": "a10", "name": "Child Life Activity Center", "area": "main4F",
        "connections": {
          "Main_4F_BreakRoomHallway": { "x": 96, "y": 0, "z": 25},
        },
        "rotate": "-0.229 -909.054 0", "script": "Here is the Child Life Activity Center. Within it you will find many toys and activities for patients to play and interact with. Hours vary, so check with your care team to see when it is open.",
      },
    
      "Main_4F_Room06Hallway": {
        "id": "a11", "name": "Inpatient Hallway", "area": "main4F",
        "connections": {
          "Main_4F_Room10Hallway": { "x": -5, "y": 0, "z": -100},
          "Main_4F_NurseStation": { "x": 3, "y": 0, "z": 100},
        },
        "rotate": "0 0 0", "script": "In Liberty inpatient rooms you will enjoy all of the same comforts and safety features as our main campus with the added bonus of natural light.",
      },
    
      "Main_4F_Room10": {
        "id": "a12", "name": "Inpatient Room", "area": "main4F",
        "connections": {
          "Main_4F_Room10Hallway": { "x": 93, "y": 0, "z": 37},
        },
        "rotate": "-1.719 -844.196 0", "script": "Each inpatient room is equipped with a monitor for vital signs, a white board for updates and Telemedicine to video call with with members of your care team not on site.",
      },
    
      "Main_4F_SpaceStation": {
        "id": "a13", "name": "Space Themed Waiting Area", "area": "main4F",
        "connections": {
          "Main_4F_ElevatorLobby": { "x": 100, "y": 0, "z": -1},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "Main_4F_StarDomeHallway": {
        "id": "a14", "name": "Star Dome Hallway", "area": "main4F",
        "connections": {
          "Main_4F_StarDome": { "x": 50, "y": 0, "z": -87},
          "Main_4F_ElevatorLobby": { "x": -50, "y": 0, "z": 86},
          "Main_4F_BreakRoomHallway": { "x": -90, "y": 0, "z": -44},
        },
        "rotate": "0.802 -357.640 0", "script": "",
      },
    
      "Main_4F_StarDome": {
        "id": "a15", "name": "Star Dome", "area": "main4F",
        "connections": {
          "Main_4F_StarDomeHallway": { "x": -47, "y": 0, "z": 88},
          "Main_4F_NurseStation": { "x": -100, "y": 0, "z": -1},
        },
        "rotate": "0 0 0", "script": "",
      },
    
      "Main_4F_WaitingArea": {
        "id": "a16", "name": "Waiting Area", "area": "main4F",
        "connections": {
          "Main_4F_ElevatorLobby": { "x": -100, "y": 0, "z": -3},
        },
        "rotate": "0 0 0", "script": "",
      },

      "Main_4F_BreakRoom": {
        "id": "a17", "name": "Family Lounge", "area": "main4F",
        "connections": {
          "Main_4F_BreakRoomHallway": { "x": 29, "y": 0, "z": -96},
        },
        "rotate": "1.490 -653.286 0", "script": "Welcome to the Family Lounge. This is where families can take a break and enjoy a meal.",
      },
    
    });
  };
