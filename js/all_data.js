// Contains all of the data for each scene
function getAllData() {
  "use strict";
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
                  "name": "Proton Children's Tour",
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
                      "cyclotron_pump",
                      "cyclotron_stairs_top",
                      "cyclotron_and_beam_line",
                      "beam_line_door_1",
                      "beam_line_turn",
                      "gantry_connection",
                      "beam_line",
                      "cyclotron_control_room"
                  ]
              },
              "cyclotron_tour": {
                  "name": "Cyclotron Tour",
                  "locations": [
                      "cyclotron_pump",
                      "cyclotron_stairs_top",
                      "cyclotron_and_beam_line",
                      "beam_line_door_1",
                      "beam_line_turn",
                      "gantry_connection",
                      "beam_line",
                      "cyclotron_control_room"
                  ]
              },
              "cbdi_outpatient_tour": {
                  "name": "CBDI Outpatient Tour",
                  "locations": [
                      "flagpole_building_b",
                      "building_b_lobby",
                      "family_center",
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
                          "x": 0.42545268207588316,
                          "y": 0.2814269436997319
                      },
                      "flagpole_building_a": {
                          "x": 0.42545268207588316,
                          "y": 0.2814269436997319
                      },
                      "outside_ucmc": {
                          "x": 0.3407265590928914,
                          "y": 0.886751563896336
                      }
                  }
              },
              "building_b_childrens": {
                  "name": "Building B: Children's",
                  "locations": {
                      "building_b_lobby": {
                          "x": 0.23895695496213631,
                          "y": 0.7230363815142576
                      },
                      "campus_info": {
                          "x": 0.23895695496213631,
                          "y": 0.5860976728941331
                      },
                      "family_center": {
                          "x": 0.39215583897967315,
                          "y": 0.9284444444444444
                      },
                      "building_b_childrens_desk": {
                          "x": 0.48957034675169386,
                          "y": 0.646350704686988
                      },
                      "ct_scanner": {
                          "x": 0.8434264647269828,
                          "y": 0.7387843330055719
                      },
                      "childrens_gantry_entrance": {
                          "x": 0.7043818254284575,
                          "y": 0.399176335627663
                      },
                      "childrens_gantry_hallway": {
                          "x": 0.6061347150259067,
                          "y": 0.306742707309079
                      },
                      "childrens_gantry": {
                          "x": 0.6211215623754484,
                          "y": 0.22731825630940675
                      },
                      "childrens_gantry_control_room": {
                          "x": 0.7801486648066959,
                          "y": 0.33344575549000327
                      },
                      "childrens_gantry_machine": {
                          "x": 0.8076245516141889,
                          "y": 0.06162241887905605
                      },
                      "celebration_garden": {
                          "x": 0.32804543642885614,
                          "y": 0.6456660111438872
                      }
                  }
              },
              "building_b_2f": {
                  "name": "Building B: Second Floor",
                  "locations": {
                      "outpatient_entrance": {
                          "x": 0.2877957244655582,
                          "y": 0.38053391959799
                      },
                      "outpatient_triage_desk": {
                          "x": 0.4201155977830562,
                          "y": 0.38053391959799
                      },
                      "outpatient_nurses_station": {
                          "x": 0.5788994457640538,
                          "y": 0.25062751256281407
                      },
                      "outpatient_room_bed": {
                          "x": 0.7219703087885986,
                          "y": 0.25062751256281407
                      },
                      "outpatient_nutrition": {
                          "x": 0.6872363420427553,
                          "y": 0.44745540201005024
                      },
                      "outpatient_room_chair": {
                          "x": 0.7459532858273951,
                          "y": 0.3831582914572864
                      }
                  }
              },
              "building_a_1f": {
                  "name": "Building A: First Floor",
                  "locations": {
                      "welcome_desk": {
                          "x": 0.6987282889079965,
                          "y": 0.6885203366058906
                      },
                      "building_a_lobby": {
                          "x": 0.5622158211521926,
                          "y": 0.6885203366058906
                      }
                  }
              },
              "building_a_4f": {
                  "name": "Building A: Fourth Floor",
                  "locations": {
                      "4th_floor_lobby": {
                          "x": 0.4609829917139119,
                          "y": 0.9040338470837112
                      },
                      "stardome_hallway": {
                          "x": 0.685097252507632,
                          "y": 0.4898954366878211
                      },
                      "family_lounge": {
                          "x": 0.4846698648059311,
                          "y": 0.6022683590208522
                      },
                      "child_life_activity_center": {
                          "x": 0.3917444395987789,
                          "y": 0.582066485343004
                      },
                      "nurses_station": {
                          "x": 0.5211112080244221,
                          "y": 0.34848232094288306
                      },
                      "inpatient_room": {
                          "x": 0.40449890972525077,
                          "y": 0.10858507101843456
                      }
                  }
              },
              "building_b_ucmc": {
                  "name": "Building B: UC Health",
                  "locations": {
                      "ucmc_front_desk": {
                          "x": 0.7242760834670946,
                          "y": 0.9416856823266219
                      },
                      "ucmc_waiting_area": {
                          "x": 0.33531300160513644,
                          "y": 0.8225145413870246
                      },
                      "building_b_uc_desk": {
                          "x": 0.4132732744783307,
                          "y": 0.6250643176733781
                      },
                      "ucmc_gantry_entrance": {
                          "x": 0.1609502407704655,
                          "y": 0.40132634228187913
                      },
                      "ucmc_gantry_hallway": {
                          "x": 0.04023756019261637,
                          "y": 0.31077964205816555
                      },
                      "ucmc_gantry_machine": {
                          "x": 0.2749566613162119,
                          "y": 0.2360055928411633
                      }
                  }
              },
              "cyclotron": {
                  "name": "Cyclotron",
                  "locations": {
                      "research_gantry": {
                          "x": 0.6352758070944599,
                          "y": 0.5735693641618497
                      },
                      "inside_research_gantry": {
                          "x": 0.6777385412514946,
                          "y": 0.4528179190751445
                      },
                      "childrens_gantry_control_room": {
                          "x": 0.8650741331207652,
                          "y": 0.9101640173410405
                      },
                      "cyclotron_control_room": {
                          "x": 0.8650741331207652,
                          "y": 0.9101640173410405
                      },
                      "cyclotron_pump": {
                          "x": 0.854250298923874,
                          "y": 0.4664024566473989
                      },
                      "cyclotron_stairs_top": {
                          "x": 0.9025412514946194,
                          "y": 0.5101748554913295
                      },
                      "cyclotron_and_beam_line": {
                          "x": 0.9308497409326424,
                          "y": 0.33810404624277457
                      },
                      "beam_line_door_1": {
                          "x": 0.9308497409326424,
                          "y": 0.2490498554913295
                      },
                      "beam_line_turn": {
                          "x": 0.9208585093662814,
                          "y": 0.13584537572254335
                      },
                      "gantry_connection": {
                          "x": 0.8359330410522121,
                          "y": 0.18716473988439306
                      },
                      "beam_line": {
                          "x": 0.5095528098844161,
                          "y": 0.11169508670520231
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
                  "transcript": "This is the inpatient registration desk where we will check you in for your inpatient stay."
              },
              "beam_line": {
                  "name": "Beam Line Middle",
                  "rotation": {
                      "x": -1.146,
                      "y": 163.522,
                      "z": 0
                  },
                  "transcript": "The beam line contains magnets to focus and bend the proton beam to the correct specifications."
              },
              "beam_line_door_1": {
                  "name": "Beam Line",
                  "rotation": {
                      "x": 1.146,
                      "y": 26.241,
                      "z": 0
                  },
                  "transcript": "The cyclotron accelerates protons using a static magnetic field and a rapidly changing electric field."
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
                  "transcript": "The cafeteria is down the hall. To get to the CBDI Inpatient rooms you will take the elevators up to the 4th floor."
              },
              "building_b_childrens_desk": {
                  "name": "Nurse's Station",
                  "rotation": {
                      "x": 0.917,
                      "y": -130.061,
                      "z": 0
                  },
                  "transcript": "Here is the nurses station.  Nurses coordinate your care throughout for the duration of your treatment."
              },
              "building_b_lobby": {
                  "name": "Building B: Lobby",
                  "rotation": {
                      "x": 7.792,
                      "y": -149.42,
                      "z": 0
                  },
                  "transcript": "This is the registration desk where you will check before going to your Proton Therapy or Cancer & Blood Diseases appointment."
              },
              "building_b_uc_desk": {
                  "name": "Nurses Station",
                  "rotation": {
                      "x": 1.602,
                      "y": -232.162,
                      "z": 0
                  },
                  "transcript": "Here is the nurses station.  Nurses coordinate your care throughout for the duration of your treatment."
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
                  "transcript": "You've arrived a the Celebration Garden. On the last day of your treatment your care team and family will gather here to celebrate."
              },
              "child_life_activity_center": {
                  "name": "Child Life Activity Center",
                  "rotation": {
                      "x": -0.229,
                      "y": -909.054,
                      "z": 0
                  },
                  "transcript": "In the Child Life Activity Center we have many toys and activities for patients to play and interact with. Hours vary, so check with your care team to see when it is open."
              },
              "childrens_gantry": {
                  "name": "Gantry",
                  "rotation": {
                      "x": -6.073,
                      "y": -28.419,
                      "z": 0
                  },
                  "transcript": "In proton therapy, the protons enter the body at a lower intensity than X-rays, and stop when they reach the tumor delivering a majority of the dose to the targeted area. This can also mean that higher doses of radiation can be used to destroy tougher tumors.  Treatment session typically last for 30 minutes, but the beam will only be on for a few minutes."
              },
              "childrens_gantry_control_room": {
                  "name": "Gantry Control Room",
                  "rotation": {
                      "x": -0.068,
                      "y": 2.122,
                      "z": 0
                  },
                  "transcript": "In the Gantry Control Room members of your care team monitor your treatment delivery so you can feel safe knowing they are watching from close by."
              },
              "childrens_gantry_entrance": {
                  "name": "Gantry Entrance",
                  "rotation": {
                      "x": 0.032,
                      "y": 0.55,
                      "z": 0
                  },
                  "transcript": "This is the entrance to the gantry. A gantry uses a proton beam to destroy cancer cells while minimizing damage to surrounding healthy tissue and organs in a process called proton therapy."
              },
              "childrens_gantry_hallway": {
                  "name": "Gantry Hallway",
                  "rotation": {
                      "x": -2.75,
                      "y": -24.064,
                      "z": 0
                  },
                  "transcript": "This winding hallway made of thick concrete walls is here to absorb any secondary radiation."
              },
              "childrens_gantry_machine": {
                  "name": "Gantry Behind the Scenes",
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
                  "transcript": "You've arrived at the cyclotron control room where the cyclotron is controlled and monitored."
              },
              "cyclotron_pump": {
                  "name": "Cyclotron",
                  "rotation": {
                      "x": 1.833,
                      "y": -135.791,
                      "z": 0
                  },
                  "transcript": "This is the cyclotron and beam line.  The cyclotron is a type of particle accelerator that creates a proton beam and the beam line delivers the beam to the gantries for proton therapy."
              },
              "cyclotron_stairs_top": {
                  "name": "Cyclotron 2",
                  "rotation": {
                      "x": -13.986,
                      "y": -209.473,
                      "z": 0
                  },
                  "transcript": "The particle beam is made up of protons taken from hydrogen atoms."
              },
              "family_center": {
                  "name": "Family Resource Center",
                  "rotation": {
                      "x": -0.573,
                      "y": -219.214,
                      "z": 0
                  },
                  "transcript": "In the Family Resource Center we have computers and comfortable chairs to allow families to work, or take a break and relax."
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
                  "name": "Main Entrance",
                  "rotation": {
                      "x": 12.032,
                      "y": 82.162,
                      "z": 0
                  },
                  "transcript": "Welcome to Cincinnati Children's Liberty Campus."
              },
              "flagpole_building_b": {
                  "name": "Main Entrance",
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
                  "transcript": "You've arrived at your inpatient room which is well equipped with monitors, a white board for updates and Telemedicine to video call with  members of your care team not on site. Each room also has a window and a plenty of room for others to visit"
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
                  "transcript": "At the nurses station your healthcare team can see the entire hallway and coordinate care for the unit."
              },
              "outpatient_entrance": {
                  "name": "CBDI Outpatient Entrance",
                  "rotation": {
                      "x": 0.458,
                      "y": -898.169,
                      "z": 0
                  },
                  "transcript": "The entrace to the CBDI outpatient area is on the second floor."
              },
              "outpatient_nurses_station": {
                  "name": "Nurse's Station",
                  "rotation": {
                      "x": -0.229,
                      "y": -944.807,
                      "z": 0
                  },
                  "transcript": "The nurses station is centrilized so that the nurses can easliy monitor all of the rooms."
              },
              "outpatient_nutrition": {
                  "name": "Nutrition Room",
                  "rotation": {
                      "x": 1.26,
                      "y": -1096.297,
                      "z": 0
                  },
                  "transcript": "In the nutrition room you can request healthy snacks from your care team members."
              },
              "outpatient_room_bed": {
                  "name": "Outpatient Room 1",
                  "rotation": {
                      "x": -1.031,
                      "y": -1013.792,
                      "z": 0
                  },
                  "transcript": "You've arrived at your outpatient room. Each room has a TV that features the Get Well network with access to multiple streaming options."
              },
              "outpatient_room_chair": {
                  "name": "Outpatient Room 2",
                  "rotation": {
                      "x": -11.001,
                      "y": -1149.583,
                      "z": 0
                  },
                  "transcript": "The rooms are also equipped with Telemedicine, which allows you to video call your doctor if they are in another building or at the Burnet Campus."
              },
              "outpatient_triage_desk": {
                  "name": "Triage Desk",
                  "rotation": {
                      "x": 0.144,
                      "y": -801.568,
                      "z": 0
                  },
                  "transcript": "When you first arrive at the outpatient center your vitals are checked at the triage desk."
              },
              "outside_ucmc": {
                  "name": "UCMC Entrance",
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
                  "name": "Star Dome Hallway",
                  "rotation": {
                      "x": 0.802,
                      "y": -357.64,
                      "z": 0
                  },
                  "transcript": "The theme of the 4th floor is stars and the universe. You'll notice the stars on the floor and walls and constallations in the halls."
              },
              "ucmc_front_desk": {
                  "name": "Registration Desk",
                  "rotation": {
                      "x": -7.719,
                      "y": -34.263,
                      "z": 0
                  },
                  "transcript": "This is the registration desk were you will check-in before going to your Proton Therapy appointment."
              },
              "ucmc_gantry": {
                  "name": "Gantry",
                  "rotation": {
                      "x": -0.344,
                      "y": 66.692,
                      "z": 0
                  },
                  "transcript": "In proton therapy, the protons enter the body at a lower intensity than X-rays, and stop when they reach the tumor delivering a majority of the dose to the targeted area. This can also mean that higher doses of radiation can be used to destroy tougher tumors. Treatment session typically last for 30 minutes, but the beam will only be on for a few minutes."
              },
              "ucmc_gantry_entrance": {
                  "name": "Gantry Entrance",
                  "rotation": {
                      "x": -3.438,
                      "y": -13.751,
                      "z": 0
                  },
                  "transcript": "This is the entrance to the gantry of the UCMC. A gantry uses a proton beam to destroy cancer cells while minimizing damage to surrounding healthy tissue and organs."
              },
              "ucmc_gantry_hallway": {
                  "name": "Gantry Hallway",
                  "rotation": {
                      "x": -2.979,
                      "y": -27.158,
                      "z": 0
                  },
                  "transcript": "This winding hallway made of thick concrete walls is here to absorb any secondary radiation."
              },
              "ucmc_gantry_machine": {
                  "name": "Gantry Behind the Scenes",
                  "rotation": {
                      "x": -2.636,
                      "y": -369.558,
                      "z": 0
                  },
                  "transcript": "This is the inner workings of a gantry.  The large machinery allows the entire gantry to be rotated so that the proton beam can get into any tight spot that is needed."
              },
              "ucmc_waiting_area": {
                  "name": "UC Health Waiting Area",
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
                  "transcript": "Immediately after walking in the door, you'll see the welcome desk for the Liberty A building."
              }
          }
      };
  return all_data;
}

