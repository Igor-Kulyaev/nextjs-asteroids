import { format } from 'date-fns';
import {addUrlParams} from "@/src/shared/utils/utils";
import {IAsteroidListItem, IAsteroidsList} from "@/src/models/asteroidsListModel";
import {useState} from "react";
import {BigScreenCart} from "@/src/entities/Cart/BigScreenCart/BigScreenCart";
import styles from "@/src/styles/Home.module.css";
import AsteroidsList from "@/src/features/AsteroidsList/AsteroidsList";
import {SmallScreenCart} from "@/src/entities/Cart/SmallScreenCart/SmallScreenCart";
import {AsteroidsCart} from "@/src/features/AsteroidsCart/AsteroidsCart";
import {oneHour} from "@/src/shared/constants/constants";

export default function Home({asteroids}: {asteroids: IAsteroidsList}) {
  const [asteroidOrders, setAsteroidOrders] = useState<IAsteroidListItem[]>([]);

  return (
    <>
      <AsteroidsList asteroids={asteroids} setAsteroidOrders={setAsteroidOrders}/>
      {/*<div className={styles.asteroidsColumnsWrapper}>*/}

      {/*  <div className={styles.asteroidsCartColumn}>*/}
      {/*    <BigScreenCart asteroidOrders={asteroidOrders} />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <AsteroidsCart asteroidOrders={asteroidOrders} />
      {/*<div style={{*/}
      {/*  position: "fixed",*/}
      {/*  bottom: 0,*/}
      {/*  left: 0,*/}
      {/*  right: 0,*/}
      {/*  backgroundColor: "orange",*/}
      {/*  height: "81px",*/}
      {/*}}>*/}
      {/*  text*/}
      {/*</div>*/}
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
