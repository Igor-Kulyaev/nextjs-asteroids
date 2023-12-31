import {createContext, Dispatch, SetStateAction} from 'react';
import {IAsteroidListItem} from "@/src/models/asteroidsListModel";
import {DistanceSelector} from "@/src/models/sharedModels";

interface AsteroidOrdersContextPayload {
  asteroidOrders: IAsteroidListItem[];
  setAsteroidOrders: Dispatch<SetStateAction<IAsteroidListItem[]>>;
  distanceSelector: DistanceSelector;
  setDistanceSelector: Dispatch<SetStateAction<DistanceSelector>>;
}

export const AsteroidOrdersContext = createContext<AsteroidOrdersContextPayload>({
  asteroidOrders: [],
  setAsteroidOrders: () => {},
  distanceSelector: DistanceSelector.Kilometers,
  setDistanceSelector: () => {},
} as AsteroidOrdersContextPayload);
