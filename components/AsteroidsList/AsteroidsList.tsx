import styles from "./AsteroidsList.module.css";
import {Cart} from "@/components/Cart/Cart";

export const AsteroidsList = ({asteroids}: {asteroids: any}) => {
  console.log("asteroids", asteroids);
  const {links, element_count, near_earth_objects} = asteroids || {};
  const [arrayKey] = Object.keys(near_earth_objects);
  const array = near_earth_objects[arrayKey];

  console.log('array', array);

  return (
    <>
      <div className={styles.asteroidsListContainer}>
        <div className={styles.asteroidsListTitle}>
          Ближайшие подлёты астероидов
        </div>
        <div className={styles.asteroidsListSelector}>
          в километрах | в лунных орбитах
        </div>
        <div className={styles.asteroidsList}>
          {array && !!array?.length && array.map((asteroid: any) => {
          return (
            <div key={asteroid.id}>ASTEROID ITEM</div>
          )
        })}
        </div>
      </div>
      <Cart />
    </>
  )
}
