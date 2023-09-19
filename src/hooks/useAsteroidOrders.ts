import {useContext} from "react";
import {AsteroidOrdersContext} from "@/src/providers/AsteroidOrdersContext/AsteroidOrdersContext";

export function useAsteroidOrders() {
  return useContext(AsteroidOrdersContext);
}