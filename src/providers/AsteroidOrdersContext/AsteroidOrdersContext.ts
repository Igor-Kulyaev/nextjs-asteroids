import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useState} from 'react';
import {IAsteroidListItem} from "@/src/models/asteroidsListModel";
import {DistanceSelector} from "@/src/models/sharedModel";

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
