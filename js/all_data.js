// Contains all of the data for each scene
function getAllData() {
  var all_data = 
{
  "tours": {
    "cbdi_inpatient_tour": {
      "name": "CBDI Impatient Tour",
      "locations": [
        "flagpole_building_a",
        "welcome_desk",
        "building_a_lobby",
        "4th_floor_lobby",
        "stardome_hallway",
        "family_lounge",
        "child_life_activity_center",
        "nurses_station",
        "inpatient_room"
      ]
    },
    "proton_pediatric_tour": {
      "name": "Proton Pediatric Tour",
      "locations": [
        "flagpole_building_b",
        "building_b_lobby",
        "family_center",
        "building_b_childrens_desk",
        "ct_scanner",
        "childrens_gantry_entrance",
        "childrens_gantry_hallway",
        "childrens_gantry",
        "childrens_gantry_control_room",
        "childrens_gantry_machine",
        "celebration_garden"
      ]
    },
    "proton_adult_tour": {
      "name": "Proton Adult Tour",
      "locations": [
        "outside_ucmc",
        "ucmc_front_desk",
        "ucmc_waiting_area",
        "building_b_uc_desk",
        "ucmc_gantry_entrance",
        "ucmc_gantry_hallway",
        "ucmc_gantry",
        "ucmc_gantry_machine"
      ]
    },
    "proton_research_tour": {
      "name": "Proton Research Tour",
      "locations": [
        "research_gantry",
        "inside_research_gantry",
        "cyclotron_control_room",
        "cyclotron_pump",
        "cyclotron_stairs_top",
        "cyclotron_and_beam_line",
        "beam_line_door_1",
        "beam_line_turn",
        "gantry_connection",
        "beam_line"
      ]
    },
    "cyclotron_tour": {
      "name": "Cyclotron Tour",
      "locations": [
        "cyclotron_control_room",
        "cyclotron_pump",
        "cyclotron_stairs_top",
        "cyclotron_and_beam_line",
        "beam_line_door_1",
        "beam_line_turn",
        "gantry_connection",
        "beam_line"
      ]
    },
    "cbdi_outpatient_tour": {
      "name": "CBDI Outpatient Tour",
      "locations": [
        "flagpole_building_b",
        "campus_info",
        "outpatient_entrance",
        "outpatient_triage_desk",
        "outpatient_nurses_station",
        "outpatient_room_bed",
        "outpatient_nutrition",
        "outpatient_room_chair"
      ]
    }
  },
  "maps": {
    "outside": {
      "name": "Outside",
      "locations": {
        "flagpole_building_b": {
          "x": 333.5,
          "y": 431.5
        },
        "flagpole_building_a": {
          "x": 333.5,
          "y": 431.5
        },
        "outside_ucmc": {
          "x": 287,
          "y": 1080
        }
      }
    },
    "building_b_childrens": {
      "name": "Building B: Children's",
      "locations": {
        "building_b_lobby": {
          "x": 217.5,
          "y": 829
        },
        "campus_info": {
          "x": 217.5,
          "y": 729
        },
        "family_center": {
          "x": 309.5,
          "y": 979
        },
        "building_b_childrens_desk": {
          "x": 368,
          "y": 773
        },
        "ct_scanner": {
          "x": 580.5,
          "y": 840.5
        },
        "childrens_gantry_entrance": {
          "x": 497,
          "y": 592.5
        },
        "childrens_gantry_hallway": {
          "x": 438,
          "y": 525
        },
        "childrens_gantry": {
          "x": 447,
          "y": 467
        },
        "childrens_gantry_control_room": {
          "x": 542.5,
          "y": 544.5
        },
        "childrens_gantry_machine": {
          "x": 559,
          "y": 346
        },
        "celebration_garden": {
          "x": 271,
          "y": 772.5
        }
      }
    },
    "building_b_2f": {
      "name": "Building B: Second Floor",
      "locations": {
        "outpatient_entrance": {
          "x": 246,
          "y": 621
        },
        "outpatient_triage_desk": {
          "x": 326,
          "y": 621
        },
        "outpatient_nurses_station": {
          "x": 422,
          "y": 571.5
        },
        "outpatient_room_bed": {
          "x": 508.5,
          "y": 571.5
        },
        "outpatient_nutrition": {
          "x": 487.5,
          "y": 646.5
        },
        "outpatient_room_chair": {
          "x": 523,
          "y": 622
        }
      }
    },
    "building_a_1f": {
      "name": "Building A: First Floor",
      "locations": {
        "welcome_desk": {
          "x": 485,
          "y": 731
        },
        "building_a_lobby": {
          "x": 409,
          "y": 731
        }
      }
    },
    "building_a_4f": {
      "name": "Building A: Fourth Floor",
      "locations": {
        "4th_floor_lobby": {
          "x": 353,
          "y": 986
        },
        "stardome_hallway": {
          "x": 476,
          "y": 658
        },
        "family_lounge": {
          "x": 366,
          "y": 747
        },
        "child_life_activity_center": {
          "x": 315,
          "y": 731
        },
        "nurses_station": {
          "x": 386,
          "y": 546
        },
        "inpatient_room": {
          "x": 322,
          "y": 356
        }
      }
    },
    "building_b_ucmc": {
      "name": "Building B: UCMC",
      "locations": {
        "ucmc_front_desk": {
          "x": 508,
          "y": 1044
        },
        "ucmc_waiting_area": {
          "x": 276,
          "y": 942
        },
        "building_b_uc_desk": {
          "x": 322.5,
          "y": 773
        },
        "ucmc_gantry_entrance": {
          "x": 172,
          "y": 581.5
        },
        "ucmc_gantry_hallway": {
          "x": 100,
          "y": 504
        },
        "ucmc_gantry_machine": {
          "x": 240,
          "y": 440
        }
      }
    },
    "cyclotron": {
      "name": "Cyclotron",
      "locations": {
        "research_gantry": {
          "x": 455.5,
          "y": 691
        },
        "inside_research_gantry": {
          "x": 481,
          "y": 651
        },
        "childrens_gantry_control_room": {
          "x": 593.5,
          "y": 802.5
        },
        "cyclotron_pump": {
          "x": 587,
          "y": 655.5
        },
        "cyclotron_stairs_top": {
          "x": 616,
          "y": 670
        },
        "cyclotron_and_beam_line": {
          "x": 633,
          "y": 613
        },
        "beam_line_door_1": {
          "x": 633,
          "y": 583.5
        },
        "beam_line_turn": {
          "x": 627,
          "y": 546
        },
        "gantry_connection": {
          "x": 576,
          "y": 563
        },
        "beam_line": {
          "x": 380,
          "y": 538
        }
      }
    }
  },
  "locations": {
    "4th_floor_lobby": {
      "name": "4th Floor: Lobby",
      "rotation": {
        "x": 0.688,
        "y": 8.594,
        "z": 0
      },
      "transcript": "This is the inpatient registration desk.  They will get you checked in for your inpatient stay."
    },
    "beam_line": {
      "name": "Beam Line",
      "rotation": {
        "x": -1.146,
        "y": 163.522,
        "z": 0
      },
      "transcript": "The beam line contains magnets to focus and bend the proton beam to the correct specifications."
    },
    "beam_line_door_1": {
      "name": "Beam Line: Door 1",
      "rotation": {
        "x": 1.146,
        "y": 26.241,
        "z": 0
      },
      "transcript": "The beam line contains magnets to focus and bend the proton beam to the correct specifications."
    },
    "beam_line_turn": {
      "name": "Beam Line Turn",
      "rotation": {
        "x": 0.229,
        "y": -130.52,
        "z": 0
      },
      "transcript": "The beam line carries the proton beam inside of a vacuum sealed two inch pipe."
    },
    "building_a_lobby": {
      "name": "Building A: Lobby",
      "rotation": {
        "x": -1.719,
        "y": 43.545,
        "z": 0
      },
      "transcript": "Further down is the cafeteria."
    },
    "building_b_childrens_desk": {
      "name": "Building B: Children's Desk",
      "rotation": {
        "x": 0.917,
        "y": -130.061,
        "z": 0
      },
      "transcript": "In proton therapy, the protons enter the body at a lower intensity that x-rays, and stop when they reach the tumor delivering a majority of the dose to the targeted area.  This can also mean that higher doses of radiation can be used to destroy tougher tumors."
    },
    "building_b_lobby": {
      "name": "Building B: Lobby",
      "rotation": {
        "x": 7.792,
        "y": -149.42,
        "z": 0
      },
      "transcript": "This is the registration desk. You will check in here before going to your Proton Therapy or Cancer & Blood Diseases appointment."
    },
    "building_b_uc_desk": {
      "name": "Building B: UC Desk",
      "rotation": {
        "x": 1.602,
        "y": -232.162,
        "z": 0
      },
      "transcript": "In proton therapy, the protons enter the body at a lower intensity than x-rays, and stop when they reach the tumor delivering a majority of the dose to the targeted area.  This can mean that higher doses of radiation can be used to destroy tougher tumors."
    },
    "campus_info": {
      "name": "Children's Campus Info",
      "rotation": {
        "x": -1.604,
        "y": -935.411,
        "z": 0
      },
      "transcript": ""
    },
    "celebration_garden": {
      "name": "Celebration Garden",
      "rotation": {
        "x": 0,
        "y": 198.358,
        "z": 0
      },
      "transcript": "On the last day of treatment, we celebrate in the Celebration Garden."
    },
    "child_life_activity_center": {
      "name": "Child Life Activity Center",
      "rotation": {
        "x": -0.229,
        "y": -909.054,
        "z": 0
      },
      "transcript": "Here is the Child Life Activity Center. Within it you will find many toys and activities for patients to play and interact with. Hours vary, so check with your care team to see when it is open."
    },
    "childrens_gantry": {
      "name": "Children's Gantry",
      "rotation": {
        "x": -6.073,
        "y": -28.419,
        "z": 0
      },
      "transcript": "Here radiation therapy staff help patients prepare for treatment. First, imaging is performed to aim the proton beam, and then the treatment is delivered. Treatment session can last for about 45 minutes, but the beam will only be on for a few minutes."
    },
    "childrens_gantry_control_room": {
      "name": "Children's Gantry Control Room",
      "rotation": {
        "x": 0.688,
        "y": 101.872,
        "z": 0
      },
      "transcript": "External control room.  Here is where the gantry is controlled by members of your care team during treatment delivery, so you the patient can feel safe knowing they are watching from close by."
    },
    "childrens_gantry_entrance": {
      "name": "Children's Gantry Entrance",
      "rotation": {
        "x": -4.354,
        "y": -18.908,
        "z": 0
      },
      "transcript": "This is the entrance to the gantry of the Cincinnati Children's. A gantry uses a proton beam to destroy kill cancer cells while minimizing damage to surrounding healthy tissue and organs in a process called proton therapy."
    },
    "childrens_gantry_hallway": {
      "name": "Children's Gantry Hallway",
      "rotation": {
        "x": -2.75,
        "y": -24.064,
        "z": 0
      },
      "transcript": "This winding hallway made of thick concrete walls is here to absorb any secondary radiation."
    },
    "childrens_gantry_machine": {
      "name": "Children's Gantry Machine",
      "rotation": {
        "x": 2.979,
        "y": 129.947,
        "z": 0
      },
      "transcript": "This is the inner workings of a gantry.  The large machinery allows the entire gantry to be rotated so that the proton beam can get into any tight spot that is needed."
    },
    "ct_scanner": {
      "name": "CT Scanner",
      "rotation": {
        "x": -2.177,
        "y": -155.615,
        "z": 0
      },
      "transcript": "In proton therapy treatment, a CT scan is taken first so that the doctors can figure out the best path for the proton beam to travel."
    },
    "cyclotron_and_beam_line": {
      "name": "Cyclotron & Beam Line",
      "rotation": {
        "x": -0.917,
        "y": 18.335,
        "z": 0
      },
      "transcript": "A hydrogen atom is made up of one proton and one electron.  The cyclotron removes the electron and sends the proton down the beam line."
    },
    "cyclotron_control_room": {
      "name": "Cyclotron Control Room",
      "rotation": {
        "x": 9.397,
        "y": -184.149,
        "z": 0
      },
      "transcript": "Here is where the cyclotron is controlled and monitored."
    },
    "cyclotron_pump": {
      "name": "Cyclotron Pump",
      "rotation": {
        "x": 1.833,
        "y": -135.791,
        "z": 0
      },
      "transcript": "This is the cyclotron and beam line.  The cyclotron is a type of particle accelerator that creates a proton beam and the beam line delivers the beam to the gantries for proton therapy."
    },
    "cyclotron_stairs_top": {
      "name": "Cyclotron Stairs Top",
      "rotation": {
        "x": -13.986,
        "y": -209.473,
        "z": 0
      },
      "transcript": "The particle beam is made up of protons taken from hydrogen atoms."
    },
    "family_center": {
      "name": "Family Center",
      "rotation": {
        "x": -0.573,
        "y": -219.214,
        "z": 0
      },
      "transcript": "This is the Family Resource Center. This is where families can take time away to work or relax."
    },
    "family_lounge": {
      "name": "Family Lounge",
      "rotation": {
        "x": 1.49,
        "y": -653.286,
        "z": 0
      },
      "transcript": "Welcome to the Family Lounge. This is where families can take a break and enjoy a meal."
    },
    "flagpole_building_a": {
      "name": "Flagpole",
      "rotation": {
        "x": 12.032,
        "y": 82.162,
        "z": 0
      },
      "transcript": "Welcome to Cincinnati Children's Liberty Campus."
    },
    "flagpole_building_b": {
      "name": "Flagpole",
      "rotation": {
        "x": 9.969,
        "y": -35.18,
        "z": 0
      },
      "transcript": "Welcome to Cincinnati Children's Liberty Campus."
    },
    "gantry_connection": {
      "name": "Gantry Connection",
      "rotation": {
        "x": 0.917,
        "y": 88.006,
        "z": 0
      },
      "transcript": "Here is where the beam line enters the back of the research gantry."
    },
    "inpatient_room": {
      "name": "Inpatient Room",
      "rotation": {
        "x": -1.719,
        "y": -844.196,
        "z": 0
      },
      "transcript": "Each inpatient room is equipped with a monitor for vital signs, a white board for updates and Telemedicine to video call with with members of your care team not on site."
    },
    "inside_research_gantry": {
      "name": "Inside Research Gantry",
      "rotation": {
        "x": 17.303,
        "y": -42.972,
        "z": 0
      },
      "transcript": "This gantry is similar in size and function to the other two gantries."
    },
    "nurses_station": {
      "name": "Nurses Station",
      "rotation": {
        "x": -0.688,
        "y": -867.343,
        "z": 0
      },
      "transcript": "Here is the nurses station. From here the healthcare team can see the entire hallway and coordinate care for the unit."
    },
    "outpatient_entrance": {
      "name": "CBDI Outpatient Entrance",
      "rotation": {
        "x": 0.458,
        "y": -898.169,
        "z": 0
      },
      "transcript": "This is the Outpatient Triage Desk. "
    },
    "outpatient_nurses_station": {
      "name": "Outpatient Nurses Station",
      "rotation": {
        "x": -0.229,
        "y": -944.807,
        "z": 0
      },
      "transcript": "The nurses station is centrilized so that the nurses can easliy monitor all of the rooms."
    },
    "outpatient_nutrition": {
      "name": "Outpatient Nutrition Room",
      "rotation": {
        "x": 1.260,
        "y": -1096.297,
        "z": 0
      },
      "transcript": "This is the nutrition room.  Snacks from here are available upon request."
    },
    "outpatient_room_bed": {
      "name": "Outpatient Room 1",
      "rotation": {
        "x": -1.031,
        "y": -1013.792,
        "z": 0
      },
      "transcript": "The rooms are equiped with Telemedicine, which allows patients to video call their doctor in other buildings or on main campus."
    },
    "outpatient_room_chair": {
      "name": "Outpatient Room 2",
      "rotation": {
        "x": -11.001,
        "y": -1149.583,
        "z": 0
      },
      "transcript": "The rooms are equiped with the Get Well Network on TV.  This will greet patients as they enter the room and has access to multiple streaming options."
    },
    "outpatient_triage_desk": {
      "name": "Outpatient Triage Desk",
      "rotation": {
        "x": 0.144,
        "y": -801.568,
        "z": 0
      },
      "transcript": "When a patient first arrives at the outpatient center, his or her vitals are checked here."
    },
    "outside_ucmc": {
      "name": "Outside UCMC",
      "rotation": {
        "x": 0,
        "y": 0,
        "z": 0
      },
      "transcript": "The right side of the Proton Therapy Building is home to the adult care side at University of Cincinnati Medical Center."
    },
    "research_gantry": {
      "name": "Research Gantry",
      "rotation": {
        "x": 1.031,
        "y": -34.148,
        "z": 0
      },
      "transcript": "This is the entrance to the research gantry.  This gantry is one of the only gantries in the world to be dedicated for research."
    },
    "stardome_hallway": {
      "name": "Stardome Hallway",
      "rotation": {
        "x": 0.802,
        "y": -357.64,
        "z": 0
      },
      "transcript": "In Liberty inpatient rooms you will enjoy all of the same comforts and safety features as our main campus with the added bonus of natural light."
    },
    "ucmc_front_desk": {
      "name": "UCMC Front Desk",
      "rotation": {
        "x": -7.719,
        "y": -34.263,
        "z": 0
      },
      "transcript": "Here is the welcome desk of the Liberty A building"
    },
    "ucmc_gantry": {
      "name": "UCMC Gantry",
      "rotation": {
        "x": -0.344,
        "y": 66.692,
        "z": 0
      },
      "transcript": "Here radiation therapy staff help patients prepare for treatment. First, imaging is performed to aim the proton beam, and then the treatment is delivered. Treatment session can last for about 45 minutes, but the beam will be on for only a few minutes."
    },
    "ucmc_gantry_entrance": {
      "name": "UCMC Gantry Entrance",
      "rotation": {
        "x": -3.438,
        "y": -13.751,
        "z": 0
      },
      "transcript": "This is the entrance to the gantry of the UCMC. A gantry uses a proton beam to destroy cancer cells while minimizing damage to surrounding healthy tissue and organs."
    },
    "ucmc_gantry_hallway": {
      "name": "UCMC Gantry Hallway",
      "rotation": {
        "x": -2.979,
        "y": -27.158,
        "z": 0
      },
      "transcript": "This winding hallway made of thick concrete walls is here to absorb any secondary radiation."
    },
    "ucmc_gantry_machine": {
      "name": "UCMC Gantry Machine",
      "rotation": {
        "x": -2.636,
        "y": -369.558,
        "z": 0
      },
      "transcript": "This is the inner workings of a gantry.  The large machinery allows the entire gantry to be rotated so that the proton beam can get into any tight spot that is needed."
    },
    "ucmc_waiting_area": {
      "name": "UCMC Waiting Area",
      "rotation": {
        "x": 0,
        "y": -172.231,
        "z": 0
      },
      "transcript": ""
    },
    "welcome_desk": {
      "name": "Welcome Desk",
      "rotation": {
        "x": -0.573,
        "y": 26.7,
        "z": 0
      },
      "transcript": "Here is the welcome desk of the Liberty A building."
    }
  }
};
  return all_data;
}

