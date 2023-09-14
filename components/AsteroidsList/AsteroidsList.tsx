import styles from "/AsteroidsList.module.css";

export const AsteroidsList = () => {
  return (
    <div className={styles.asteroidsListContainer}>
      <div className={styles.asteroidsListTitle}>
        Ближайшие подлёты астероидов
      </div>
      <div className={styles.asteroidsListSelector}>
        в километрах | в лунных орбитах
      </div>
      <div className={styles.asteroidsList}>
        Asteroids List
      </div>
    </div>
  )
}
