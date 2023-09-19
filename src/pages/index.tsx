import { format } from 'date-fns';
import {addUrlParams} from "@/src/shared/utils/utils";
import {IAsteroidListItem, IAsteroidsList} from "@/src/models/asteroidsListModel";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import AsteroidsList from "@/src/features/AsteroidsList/AsteroidsList";
import {AsteroidsCart} from "@/src/features/AsteroidsCart/AsteroidsCart";
import {oneHour} from "@/src/shared/constants/constants";
import {useAsteroidOrders} from "@/src/hooks/useAsteroidOrders";

export default function Home({asteroids}: {asteroids: IAsteroidsList}) {
  // const [asteroidOrders, setAsteroidOrders] = useState<IAsteroidListItem[]>([]);

  const {
    asteroidOrders,
    setAsteroidOrders,
    distanceSelector,
    setDistanceSelector
  } = useAsteroidOrders();

  // useEffect(() => {
  //   setAsteroidOrders([]);
  // }, []);

  return (
    <>
      <AsteroidsList
        asteroids={asteroids}
        setAsteroidOrders={setAsteroidOrders}
        distanceSelector={distanceSelector}
        setDistanceSelector={setDistanceSelector}
      />
      <AsteroidsCart asteroidOrders={asteroidOrders} />
    </>
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
      revalidate: oneHour,
    }
  } catch (error) {
    return {
      notFound: true
    };
  }
}
