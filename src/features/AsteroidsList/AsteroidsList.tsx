import {IAsteroidListItem, IAsteroidsList} from "@/src/models/asteroidsListModel";
import {Dispatch, MutableRefObject, SetStateAction, useEffect, useRef, useState} from "react";
import {AsteroidListItem} from "@/src/entities/AsteroidListItem/AsteroidListItem";
import {Spinner} from "@/src/shared/ui/Spinner/Spinner";
import {DistanceSelector, ToastType} from "@/src/models/sharedModels";
import styles from "./AsteroidsList.module.css"
import {Toast} from "@/src/shared/ui/Toast/Toast";
import {useToastError} from "@/src/hooks/useToastError";
import {convertHttpToHttpsString} from "@/src/shared/utils/utils";

export interface IAsteroidsListProps {
  asteroids: IAsteroidsList;
  setAsteroidOrders: Dispatch<SetStateAction<IAsteroidListItem[]>>;
  distanceSelector: DistanceSelector;
  setDistanceSelector: Dispatch<SetStateAction<DistanceSelector>>;
}

export default function AsteroidsList({
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

  const [loadingNewAsteroids, setLoadingNewAsteroids] = useState(false);
  const [newAsteroids, setNewAsteroids] = useState<IAsteroidListItem[]>([]);
  const nextPaginationUrl = useRef(nextPageLink);
  const observerLastItemRef = useRef<HTMLElement | null>(null);

  const {toastMessage: toastError, setToastMessage: setToastError} = useToastError();

  useEffect(() => {
    const getNewAsteroids = async () => {
      setLoadingNewAsteroids(true);
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
      } finally {
        setLoadingNewAsteroids(false);
      }
    }
    const observer = new IntersectionObserver(
      async (entries) => {
        if (entries[0].isIntersecting) {
          if (loadingNewAsteroids) {
            return;
          }
          await getNewAsteroids();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (observerLastItemRef.current) {
      observer.observe(observerLastItemRef.current);
    }

    return () => {
      if (observerLastItemRef.current) {
        observer.unobserve(observerLastItemRef.current);
      }
    };
  }, [loadingNewAsteroids]);

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
        {!!asteroidsList.length && asteroidsList.map((asteroid) => {
          return (
            <AsteroidListItem
              key={asteroid.id}
              asteroid={asteroid}
              setOrders={setAsteroidOrders}
              distanceSelector={distanceSelector}/>
          )
        })}
        {!!newAsteroids.length && newAsteroids.map((asteroid) => {
          return(
            <AsteroidListItem
              key={asteroid.close_approach_data[0].close_approach_date + asteroid.id}
              asteroid={asteroid}
              setOrders={setAsteroidOrders}
              distanceSelector={distanceSelector} />
          )
        })}
        {loadingNewAsteroids && (
          <div className={styles.spinnerWrapper}>
            <Spinner />
          </div>
        )}
        <div ref={observerLastItemRef as MutableRefObject<HTMLDivElement | null>} style={{ height: "10px", width: "100px"}} />
      </div>
    </>
  )
}
