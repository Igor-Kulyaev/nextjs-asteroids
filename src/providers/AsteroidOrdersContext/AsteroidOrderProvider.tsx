import {ReactNode, useContext, useState} from "react";
import {IAsteroidListItem} from "@/src/models/asteroidsListModel";
import {AsteroidOrdersContext} from "./AsteroidOrdersContext";
import {DistanceSelector} from "@/src/models/sharedModel";

export function AsteroidOrdersProvider({ children }: {children: ReactNode}) {
  const [asteroidOrders, setAsteroidOrders] = useState<IAsteroidListItem[]>([]);
  const [distanceSelector, setDistanceSelector] = useState<DistanceSelector>(DistanceSelector.Kilometers);

  return (
    <AsteroidOrdersContext.Provider value={{ asteroidOrders, setAsteroidOrders, distanceSelector, setDistanceSelector }}>
      {children}
    </AsteroidOrdersContext.Provider>
  );
}
