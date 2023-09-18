import { format } from 'date-fns';
import {addUrlParams} from "@/src/utils/utils";
import {IAsteroidListItem, IAsteroidsList} from "@/src/models/asteroidsListModel";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {AsteroidListItem} from "@/src/components/AsteroidListItem/AsteroidListItem";
import {Cart} from "@/src/components/Cart/Cart";
import {Spinner} from "@/src/components/Spinner/Spinner";

// const url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-14&end_date=2023-09-14&api_key=bXcLsxkE0rRaauQsHzuweAwfgSNLug3lmYE9e9MC";

export default function Home({asteroids}: {asteroids: IAsteroidsList}) {
  const nextPageLink = asteroids.links.next;
  const [todayDateKey] = Object.keys(asteroids.near_earth_objects);
  const asteroidsList = asteroids.near_earth_objects[todayDateKey];

  const [distanceSelector, setDistanceSelector] = useState<"km" | "lunar">("km");

  const setKilometersDistance = () => setDistanceSelector("km");
  const setLunarDistance = () => setDistanceSelector("lunar");

  const [loadingNewAsteroids, setLoadingNewAsteroids] = useState(false);
  const [newAsteroids, setNewAsteroids] = useState<IAsteroidListItem[]>([]);
  const nextPaginationUrl = useRef(nextPageLink);
  const lastAsteroidRef = useRef<HTMLElement | null>(null);

  const [newAsteroidsError, setNewAsteroidsError] = useState<string | null>(null);
  const [asteroidOrders, setAsteroidOrders] = useState<IAsteroidListItem[]>([]);

  const observer = useRef<IntersectionObserver | null>(null); // Ref to store the observer instance
  const isObserving = useRef(false); // Ref to track whether the observer is currently observing

  useEffect(() => {
    const getNewAsteroids = async () => {
      setLoadingNewAsteroids(true);
      try {
        const result = await fetch(nextPaginationUrl.current);

        if (result.status !== 200) {
          throw new Error("Asteroids not found");
        }

        const data = await result.json();

        const nextPageLink = data.links.next;
        const [todayDateKey] = Object.keys(data.near_earth_objects);
        const asteroidsList = data.near_earth_objects[todayDateKey];

        setNewAsteroids(oldState => [...oldState, ...asteroidsList]);
        nextPaginationUrl.current = nextPageLink;
      } catch (error) {
        setNewAsteroidsError(typeof error === "string" ? error : (error as Record<string, any>).message);
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
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 1.0, // Trigger when the element is fully visible
      }
    );

    if (lastAsteroidRef.current) {
      observer.observe(lastAsteroidRef.current);
    }

    // Cleanup the observer when unmounting
    return () => {
      if (lastAsteroidRef.current) {
        observer.unobserve(lastAsteroidRef.current);
      }
    };
  }, [loadingNewAsteroids]);

  return (
    <div style={{ display: 'flex', overflow: 'hidden' }}>
      <div style={{ flex: 1, overflowY: 'auto', paddingRight: '20px' }}>
        <div>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "400",
              lineHeight: "36px",
            }}>Ближайшие подлёты астероидов</h1>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <button
            style={{
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "0px",
              backgroundColor: "transparent",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderBottom: "1px solid white"
            }}
            onClick={setKilometersDistance}
          >
            в километрах
          </button>
          {" | "}
          <button
            style={{
              fontSize: "16px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "0px",
              backgroundColor: "transparent",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
            onClick={setLunarDistance}
          >
            в лунных орбитах
          </button>
        </div>
        {!!asteroidsList.length && asteroidsList.map((asteroid) => {
          return (
            <div key={asteroid.id}>
              <AsteroidListItem asteroid={asteroid} setOrders={setAsteroidOrders} distanceSelector={distanceSelector}/>
              {/*<div key={asteroid.id} style={{backgroundColor: "green", width: "300px", marginBottom: "100px"}}>*/}
              {/*  <div>{asteroid.close_approach_data[0].close_approach_date}</div>*/}
              {/*  <div>{asteroid.estimated_diameter.kilometers.estimated_diameter_max}</div>*/}
              {/*  <div>*/}
              {/*    <button>Заказать</button>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          )
        })}
        {!!newAsteroids.length && newAsteroids.map((asteroid) => {
          return(
            <div key={asteroid.close_approach_data[0].close_approach_date + asteroid.id}>
              <AsteroidListItem asteroid={asteroid} setOrders={setAsteroidOrders} distanceSelector={distanceSelector} />
              {/*<div key={asteroid.close_approach_data[0].close_approach_date + asteroid.id} style={{width: "250px", backgroundColor: "orange", marginBottom: "25px"}}>*/}
              {/*  <div>{asteroid.close_approach_data[0].close_approach_date}</div>*/}
              {/*  <div>{'Async asteroid ' + asteroid.id}</div>*/}
              {/*  <div>{asteroid.name}</div>*/}
              {/*</div>*/}
            </div>

          )
        })}
        {loadingNewAsteroids && <div style={{ display: "flex", justifyContent: "center" }}><Spinner /></div>}
        <div ref={lastAsteroidRef as MutableRefObject<HTMLDivElement | null>} style={{ height: "20px"}} />
      </div>
      <div style={{ width: '300px', position: 'fixed', top: '120px', right: '0', padding: '10px' }}>
        <Cart asteroidOrders={asteroidOrders} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const now = new Date();
  const formattedDate = format(now, 'yyyy-MM-dd');

  const urlWithParams = addUrlParams(process.env.API_URL as string, {
    start_date: formattedDate,
    end_date: formattedDate,
    api_key: process.env.API_KEY as string,
  });

  try {
    const response = await fetch(urlWithParams);

    if (response.status !== 200) {
      return {
        notFound: true,
      }
    }

    const data = await response.json();

    return {
      props: {
        asteroids: data,
      },
    }
  } catch (error) {
    return {
      notFound: true
    };
  }
}
