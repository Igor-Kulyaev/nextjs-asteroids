import {IAsteroidsList} from "@/models/asteroidsListModel";

export const AsteroidsListTemplate: IAsteroidsList = {
  "links": {
    "next": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-08&end_date=2015-09-09&detailed=false&api_key=DEMO_KEY",
    "previous": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-06&end_date=2015-09-07&detailed=false&api_key=DEMO_KEY",
    "self": "http://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&detailed=false&api_key=DEMO_KEY"
  },
  "element_count": 6,
  "near_earth_objects": {
    "2015-09-08": [
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2465633?api_key=DEMO_KEY"
        },
        "id": "2465633",
        "neo_reference_id": "2465633",
        "name": "465633 (2009 JR5)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633",
        "absolute_magnitude_h": 20.44,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.2170475943,
            "estimated_diameter_max": 0.4853331752
          },
          "meters": {
            "estimated_diameter_min": 217.0475943071,
            "estimated_diameter_max": 485.3331752235
          },
          "miles": {
            "estimated_diameter_min": 0.1348670807,
            "estimated_diameter_max": 0.3015719604
          },
          "feet": {
            "estimated_diameter_min": 712.0984293066,
            "estimated_diameter_max": 1592.3004946003
          }
        },
        "is_potentially_hazardous_asteroid": true,
        "close_approach_data": [
          {
            "close_approach_date": "2015-09-08",
            "close_approach_date_full": "2015-Sep-08 20:28",
            "epoch_date_close_approach": 1441744080000,
            "relative_velocity": {
              "kilometers_per_second": "18.1279360862",
              "kilometers_per_hour": "65260.5699103704",
              "miles_per_hour": "40550.3802312521"
            },
            "miss_distance": {
              "astronomical": "0.3027469457",
              "lunar": "117.7685618773",
              "kilometers": "45290298.225725659",
              "miles": "28142086.3515817342"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/3426410?api_key=DEMO_KEY"
        },
        "id": "3426410",
        "neo_reference_id": "3426410",
        "name": "(2008 QV11)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3426410",
        "absolute_magnitude_h": 21.34,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.1434019235,
            "estimated_diameter_max": 0.320656449
          },
          "meters": {
            "estimated_diameter_min": 143.4019234645,
            "estimated_diameter_max": 320.6564489709
          },
          "miles": {
            "estimated_diameter_min": 0.0891057966,
            "estimated_diameter_max": 0.1992466184
          },
          "feet": {
            "estimated_diameter_min": 470.4787665793,
            "estimated_diameter_max": 1052.0225040417
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2015-09-08",
            "close_approach_date_full": "2015-Sep-08 14:31",
            "epoch_date_close_approach": 1441722660000,
            "relative_velocity": {
              "kilometers_per_second": "19.7498128142",
              "kilometers_per_hour": "71099.3261312856",
              "miles_per_hour": "44178.3562841869"
            },
            "miss_distance": {
              "astronomical": "0.2591250701",
              "lunar": "100.7996522689",
              "kilometers": "38764558.550560687",
              "miles": "24087179.7459520006"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/3553060?api_key=DEMO_KEY"
        },
        "id": "3553060",
        "neo_reference_id": "3553060",
        "name": "(2010 XT10)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3553060",
        "absolute_magnitude_h": 26.5,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.0133215567,
            "estimated_diameter_max": 0.0297879063
          },
          "meters": {
            "estimated_diameter_min": 13.3215566698,
            "estimated_diameter_max": 29.7879062798
          },
          "miles": {
            "estimated_diameter_min": 0.008277629,
            "estimated_diameter_max": 0.0185093411
          },
          "feet": {
            "estimated_diameter_min": 43.7058959846,
            "estimated_diameter_max": 97.7293544391
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2015-09-08",
            "close_approach_date_full": "2015-Sep-08 12:07",
            "epoch_date_close_approach": 1441714020000,
            "relative_velocity": {
              "kilometers_per_second": "19.1530348886",
              "kilometers_per_hour": "68950.9255988812",
              "miles_per_hour": "42843.4237422604"
            },
            "miss_distance": {
              "astronomical": "0.4917435147",
              "lunar": "191.2882272183",
              "kilometers": "73563782.385433689",
              "miles": "45710414.7542113482"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
    ],
    "2015-09-07": [
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/2440012?api_key=DEMO_KEY"
        },
        "id": "2440012",
        "neo_reference_id": "2440012",
        "name": "440012 (2002 LE27)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2440012",
        "absolute_magnitude_h": 19.61,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.3180936332,
            "estimated_diameter_max": 0.7112789871
          },
          "meters": {
            "estimated_diameter_min": 318.0936332215,
            "estimated_diameter_max": 711.2789870931
          },
          "miles": {
            "estimated_diameter_min": 0.197654159,
            "estimated_diameter_max": 0.4419681355
          },
          "feet": {
            "estimated_diameter_min": 1043.6143156183,
            "estimated_diameter_max": 2333.5925520145
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2015-09-07",
            "close_approach_date_full": "2015-Sep-07 07:32",
            "epoch_date_close_approach": 1441611120000,
            "relative_velocity": {
              "kilometers_per_second": "1.1630843052",
              "kilometers_per_hour": "4187.1034988155",
              "miles_per_hour": "2601.7032823612"
            },
            "miss_distance": {
              "astronomical": "0.4981690972",
              "lunar": "193.7877788108",
              "kilometers": "74525035.840942964",
              "miles": "46307709.9545183432"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/3713989?api_key=DEMO_KEY"
        },
        "id": "3713989",
        "neo_reference_id": "3713989",
        "name": "(2015 FC35)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3713989",
        "absolute_magnitude_h": 22.15,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.0987540639,
            "estimated_diameter_max": 0.2208207999
          },
          "meters": {
            "estimated_diameter_min": 98.754063894,
            "estimated_diameter_max": 220.8207999214
          },
          "miles": {
            "estimated_diameter_min": 0.0613629114,
            "estimated_diameter_max": 0.1372116413
          },
          "feet": {
            "estimated_diameter_min": 323.9962829861,
            "estimated_diameter_max": 724.4777132141
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2015-09-07",
            "close_approach_date_full": "2015-Sep-07 20:01",
            "epoch_date_close_approach": 1441656060000,
            "relative_velocity": {
              "kilometers_per_second": "8.7635328327",
              "kilometers_per_hour": "31548.7181977204",
              "miles_per_hour": "19603.1465934669"
            },
            "miss_distance": {
              "astronomical": "0.3213750467",
              "lunar": "125.0148931663",
              "kilometers": "48077022.457470529",
              "miles": "29873676.4942861402"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
      {
        "links": {
          "self": "http://api.nasa.gov/neo/rest/v1/neo/3726788?api_key=DEMO_KEY"
        },
        "id": "3726788",
        "neo_reference_id": "3726788",
        "name": "(2015 RG2)",
        "nasa_jpl_url": "http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3726788",
        "absolute_magnitude_h": 26.7,
        "estimated_diameter": {
          "kilometers": {
            "estimated_diameter_min": 0.0121494041,
            "estimated_diameter_max": 0.0271668934
          },
          "meters": {
            "estimated_diameter_min": 12.14940408,
            "estimated_diameter_max": 27.1668934089
          },
          "miles": {
            "estimated_diameter_min": 0.0075492874,
            "estimated_diameter_max": 0.0168807197
          },
          "feet": {
            "estimated_diameter_min": 39.8602508817,
            "estimated_diameter_max": 89.1302305717
          }
        },
        "is_potentially_hazardous_asteroid": false,
        "close_approach_data": [
          {
            "close_approach_date": "2015-09-07",
            "close_approach_date_full": "2015-Sep-07 17:58",
            "epoch_date_close_approach": 1441648680000,
            "relative_velocity": {
              "kilometers_per_second": "8.0871658927",
              "kilometers_per_hour": "29113.7972136669",
              "miles_per_hour": "18090.1813853476"
            },
            "miss_distance": {
              "astronomical": "0.0163786734",
              "lunar": "6.3713039526",
              "kilometers": "2450214.654065658",
              "miles": "1522492.7871077604"
            },
            "orbiting_body": "Earth"
          }
        ],
        "is_sentry_object": false
      },
    ]
  }
};
