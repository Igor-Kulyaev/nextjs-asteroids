import styles from "./AsteroidListItem.module.css";
import {IAsteroidListItem} from "@/src/models/asteroidsListModel";
import {Dispatch, SetStateAction, useState} from "react";
import Image from "next/image";
import {convertDateToRusLocale, formatIntegerToRussianLocale, formatLunarDistancePluralRus} from "@/src/utils/utils";

export const AsteroidListItem = ({asteroid, setOrders, distanceSelector}: {asteroid: IAsteroidListItem; setOrders: Dispatch<SetStateAction<IAsteroidListItem[]>>, distanceSelector: "km" | "lunar"}) => {
  const [isOrdered, setIsOrdered] = useState(false);

  const kmToEarth = `${formatIntegerToRussianLocale(parseFloat(asteroid.close_approach_data[0].miss_distance.kilometers))} км`;
  const lunarToEarth = formatLunarDistancePluralRus(Math.round(parseFloat(asteroid.close_approach_data[0].miss_distance.lunar)));

  return (
    <div className={styles.asteroidWrapper}>
      <h2 className={styles.asteroidApproachDate}>{convertDateToRusLocale(asteroid.close_approach_data[0].close_approach_date)}</h2>
      <div className={styles.asteroidGeneralInfo}>
        <div className={styles.asteroidDistanceToEarth}>
          {distanceSelector === "km" ? kmToEarth : lunarToEarth}
          <Image src="/arrowDistance.png" alt="Distance to Earth" width={100} height={10} priority />
        </div>
        <div className={styles.asteroidDiameterWrapper}>
          <div className={styles.asteroidDiameterImg}>
            {asteroid.estimated_diameter.meters.estimated_diameter_max > 500 ? (
              <Image src="/bigAsteroid.png" alt="Asteroid image" width={40} height={40} priority />
            ) : (
              <Image src="/smallAsteroid.png" alt="Asteroid image" width={25} height={25} priority />
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
        {isOrdered
          ? (<button
              className={styles.unorderAsteroid}
              onClick={() => {
                setIsOrdered(false);
                setOrders((prev) => [...prev.filter((elem) => elem.id !== asteroid.id)]);
              }}
            >
            В корзине
          </button>)
          : (<button
              className={styles.orderAsteroid}
              onClick={() => {
              setIsOrdered(true);
              setOrders((prev) => [...prev, asteroid]);
            }}>
              Заказать
            </button>
            )
        }
        {asteroid.is_potentially_hazardous_asteroid && <div className={styles.dangerousAsteroid}>
          ⚠️ Опасен
          </div>}
      </div>
    </div>
  )
}