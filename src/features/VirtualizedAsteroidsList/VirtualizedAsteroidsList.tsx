import {IAsteroidListItem, IAsteroidsList} from "@/src/models/asteroidsListModel";
import {Dispatch, SetStateAction, useCallback, useEffect, useRef, useState} from "react";
import {DistanceSelector, ToastType} from "@/src/models/sharedModels";
import {Virtuoso} from "react-virtuoso";
import {useToastError} from "@/src/hooks/useToastError";
import {Toast} from "@/src/shared/ui/Toast/Toast";
import styles from "./VirtualizedAsteroidsList.module.css";
import {AsteroidListItem} from "@/src/entities/AsteroidListItem/AsteroidListItem";
import {Spinner} from "@/src/shared/ui/Spinner/Spinner";
import {convertHttpToHttpsString} from "@/src/shared/utils/utils";

const VirtualizedSpinner = () => {
  return (
    <>
      <div className={styles.spinnerWrapper}>
        <Spinner />
      </div>
      <div style={{width: "100px", height: "10px"}}></div>
    </>
  )
};

export interface IAsteroidsListProps {
  asteroids: IAsteroidsList;
  setAsteroidOrders: Dispatch<SetStateAction<IAsteroidListItem[]>>;
  distanceSelector: DistanceSelector;
  setDistanceSelector: Dispatch<SetStateAction<DistanceSelector>>;
}

export default function VirtualizedAsteroidsList({
 asteroids,
 setAsteroidOrders,
 distanceSelector,
 setDistanceSelector
}: IAsteroidsListProps) {

  const nextPageLink = convertHttpToHttpsString(asteroids.links.next);
  const [todayDateKey] = Object.keys(asteroids.near_earth_objects);
  const asteroidsList = asteroids.near_earth_objects[todayDateKey];

  const setKilometersDistance = () => setDistanceSelector(DistanceSelector.Kilometers);
  const setLunarDistance = () => setDistanceSelector(DistanceSelector.Lunar);

  const [newAsteroids, setNewAsteroids] = useState<IAsteroidListItem[]>([]);
  const nextPaginationUrl = useRef(nextPageLink);

  const {toastMessage: toastError, setToastMessage: setToastError} = useToastError();

  const getNewAsteroids = async () => {
    try {
      const result = await fetch(nextPaginationUrl.current);

      if (result.status !== 200) {
        throw new Error("Asteroids not found");
      }

      const data = await result.json();

      const nextPageLink = convertHttpToHttpsString(data.links.next);
      const [todayDateKey] = Object.keys(data.near_earth_objects);
      const asteroidsList = data.near_earth_objects[todayDateKey];

      setNewAsteroids(oldState => [...oldState, ...asteroidsList]);
      nextPaginationUrl.current = nextPageLink;
    } catch (error) {
      setToastError(typeof error === "string" ? error : (error as Record<string, any>).message);
    }
  }

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      getNewAsteroids();
    }, 200)
  }, [getNewAsteroids])

  useEffect(() => {
    const timeout = loadMore()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <Toast message={toastError} type={ToastType.Error}/>
      <div className={styles.asteroidsListWrapper}>
        <h1 className={styles.asteroidsListTitle} >Ближайшие подлёты астероидов</h1>
        <div className={styles.asteroidsDistanceButtonsWrapper}>
          <button
            className={`${styles.asteroidsDistanceBtn} ${distanceSelector === DistanceSelector.Kilometers && styles.asteroidsDistanceBtn_active}`}
            onClick={setKilometersDistance}
          >в километрах </button>
          {" | "}
          <button
            className={`${styles.asteroidsDistanceBtn} ${distanceSelector === DistanceSelector.Lunar && styles.asteroidsDistanceBtn_active}`}
            onClick={setLunarDistance}
          > в лунных орбитах </button>
        </div>
        <Virtuoso
          useWindowScroll
          style={{ height: 600 }}
          data={[...asteroidsList, ...newAsteroids]}
          endReached={loadMore}
          overscan={25}
          itemContent={(index, asteroid) => {
            return (
              <AsteroidListItem
                asteroid={asteroid}
                setOrders={setAsteroidOrders}
                distanceSelector={distanceSelector}/>
            )
          }}
          components={{ Footer: VirtualizedSpinner }}
        />
      </div>
    </>
  )
}