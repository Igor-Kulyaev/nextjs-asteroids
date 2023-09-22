import {IAsteroid} from "@/src/models/asteroidModel";
import styles from "./AsteroidAllDetails.module.css";
import {
  convertDateTimeToRusLocale,
  convertStringToRoundedNumber,
  formatIntegerToRusLocale
} from "@/src/shared/utils/utils";
import Image from "next/image";

export const AsteroidAllDetails = ({asteroid}: {asteroid: IAsteroid}) => {
  return (
    <div className={styles.asteroidWrapper}>
      <h1 className={styles.asteroidTitle}>Астероид {asteroid.name}</h1>
      <div className={styles.asteroidTableWrapper}>
        <Image src="/asteroid.png" alt="Planet image" width={400} height={300} className={styles.planetImg} priority />
        <div className={styles.asteroidTableName}>Сближения с Землей</div>
        <div className={styles.asteroidSubTitle}>
          <div className={styles.asteroidSubTitleItem}>Время сближения</div>
          <div className={styles.asteroidSubTitleItem}>Скорость</div>
          <div className={styles.asteroidSubTitleItem}>Расстояние до Земли</div>
          <div className={styles.asteroidSubTitleItem}>Орбита</div>
        </div>
        {asteroid?.close_approach_data && asteroid?.close_approach_data.map((date) => {
          return (
            <div className={styles.approachItemWrapper}>
              <div className={styles.approachDateTime}>{convertDateTimeToRusLocale(date.close_approach_date_full)}</div>
              <div className={styles.approachVelocity}>{convertStringToRoundedNumber(date.relative_velocity.kilometers_per_second, 2)} км/с</div>
              <div className={styles.approachDistance}>{formatIntegerToRusLocale(convertStringToRoundedNumber(date.miss_distance.kilometers, 0))} км</div>
              <div className={styles.approachOrbit}>{date.orbiting_body}</div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}