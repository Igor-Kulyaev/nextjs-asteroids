import styles from "./AsteroidListItem.module.css";
import {IAsteroidListItem} from "@/src/models/asteroidsListModel";
import {Dispatch, SetStateAction, useState} from "react";
import Image from "next/image";
import {
  convertDateToRusLocale,
  formatIntegerToRusLocale,
  makeRusPluralization,
} from "@/src/shared/utils/utils";
import {DistanceSelector} from "@/src/models/sharedModel";
import Link from "next/link";

export interface IAsteroidListItemProps {
  asteroid: IAsteroidListItem;
  setOrders: Dispatch<SetStateAction<IAsteroidListItem[]>>;
  distanceSelector: DistanceSelector;
  isSent?: boolean;
}

export const AsteroidListItem = ({asteroid, setOrders, distanceSelector, isSent = false}: IAsteroidListItemProps) => {
  const [isOrdered, setIsOrdered] = useState(false);

  const kmToEarth = `${formatIntegerToRusLocale(parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers))} км`;
  const lunarToEarth = makeRusPluralization(['лунная орбита', 'лунные орбиты', 'лунных орбит'], Math.round(parseFloat(asteroid.close_approach_data[0].miss_distance.lunar)));

  return (
    <Link href={`/asteroids/${asteroid.id}`}>
      <div className={styles.asteroidWrapper}>
        <h2 className={styles.asteroidApproachDate}>{convertDateToRusLocale(asteroid.close_approach_data[0].close_approach_date)}</h2>
        <div className={styles.asteroidGeneralInfo}>
          <div className={styles.asteroidDistanceToEarth}>
            {distanceSelector === "km" ? kmToEarth : lunarToEarth}
            <Image src="/arrowDistance.png" alt="Distance to Earth" width={150} height={10} priority />
          </div>
          <div className={styles.asteroidDiameterWrapper}>
            <div className={styles.asteroidDiameterImg}>
              {asteroid.estimated_diameter.meters.estimated_diameter_max > 500 ? (
                <Image src="/bigAsteroid.png" alt="Big asteroid" width={40} height={40} priority />
              ) : (
                <Image src="/smallAsteroid.png" alt="Small asteroid" width={25} height={25} priority />
              )}
            </div>
            <div className={styles.asteroidAdditionalInfo}>
              <div className={styles.asteroidName}>
                {asteroid.name}
              </div>
              <div className={styles.asteroidDiameter}>
                Ø {Math.round(asteroid.estimated_diameter.meters.estimated_diameter_max)} м
              </div>
            </div>
          </div>
        </div>
        <div className={styles.asteroidActions}>
          {!isSent && (
            isOrdered
              ? (
                <button
                  className={`${styles.asteroidActionBtn} ${styles.unorderAsteroidBtn}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOrdered(false);
                    setOrders((prev) => [...prev.filter((elem) => elem.id !== asteroid.id)]);
                  }}
                >
                  В корзине
                </button>)
              : (
                <button
                  className={`${styles.asteroidActionBtn} ${styles.orderAsteroidBtn}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOrdered(true);
                    setOrders((prev) => [...prev, asteroid]);
                  }}>
                  Заказать
                </button>
              )
          )}
          {asteroid.is_potentially_hazardous_asteroid && (
            <div className={styles.dangerousAsteroid}>⚠️ Опасен</div>
          )}
        </div>
      </div>
    </Link>
  )
}