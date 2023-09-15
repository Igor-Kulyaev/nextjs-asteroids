export interface IEstimatedDiameterMinMax {
  "estimated_diameter_min": number;
  "estimated_diameter_max": number;
};

export interface IEstimatedDiameter {
  "kilometers": IEstimatedDiameterMinMax;
  "meters": IEstimatedDiameterMinMax;
  "miles": IEstimatedDiameterMinMax;
  "feet": IEstimatedDiameterMinMax;
}

export interface ICloseApproachDataItem {
  "close_approach_date": string | Date;
  "close_approach_date_full": string | Date;
  "epoch_date_close_approach": number;
  "relative_velocity": {
    "kilometers_per_second": string;
    "kilometers_per_hour": string;
    "miles_per_hour": string;
  };
  "miss_distance": {
    "astronomical": string;
    "lunar": string;
    "kilometers": string;
    "miles": string;
  };
  "orbiting_body": string;
}
