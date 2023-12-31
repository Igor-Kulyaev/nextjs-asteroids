import { format } from 'date-fns';
import {addUrlParams} from "@/src/shared/utils/utils";
import {IAsteroidsList} from "@/src/models/asteroidsListModel";
import AsteroidsList from "@/src/features/AsteroidsList/AsteroidsList";
import {AsteroidsCart} from "@/src/features/AsteroidsCart/AsteroidsCart";
import {oneHourInSeconds} from "@/src/shared/constants/constants";
import {useAsteroidOrders} from "@/src/hooks/useAsteroidOrders";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home({asteroids}: {asteroids: IAsteroidsList}) {
  const {
    asteroidOrders,
    setAsteroidOrders,
    distanceSelector,
    setDistanceSelector
  } = useAsteroidOrders();

  const router = useRouter();

  // Clear the asteroidOrders state when leaving the home page, except when going to /orders
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (!url.includes('/orders')) {
        setAsteroidOrders([]);
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [setAsteroidOrders, router]);


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

  const urlWithParams = addUrlParams(`${process.env.API_URL}/feed`, {
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
      revalidate: oneHourInSeconds,
    }
  } catch (error) {
    return {
      notFound: true
    };
  }
}
