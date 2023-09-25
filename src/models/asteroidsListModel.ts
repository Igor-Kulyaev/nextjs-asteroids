import {ICloseApproachDataItem, IEstimatedDiameter} from "@/src/models/sharedModels";

export interface IAsteroidsPagination {
  next: string;
  prev?: string; // in response either "prev" or "previous" key may be used
  previous?: string;
  self: string;
}

export interface IAsteroidListItem {
  links: {
    self: string;
  };
  id: string;
  neo_reference_id: string;
  name: string;
  nasa_jpl_url: string;
  absolute_magnitude_h: number;
  estimated_diameter: IEstimatedDiameter;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: ICloseApproachDataItem[];
  is_sentry_object: boolean;
}

export interface IAsteroidsList {
  links: IAsteroidsPagination;
  element_count: number;
  near_earth_objects: Record<string, IAsteroidListItem[]>;
}