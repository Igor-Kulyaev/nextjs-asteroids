import {AsteroidListItem} from "@/src/entities/AsteroidListItem/AsteroidListItem";
import styles from "./OrdersList.module.css"
import {useAsteroidOrders} from "@/src/hooks/useAsteroidOrders";

export const OrdersList = () => {
  const {
    asteroidOrders,
    setAsteroidOrders,
    distanceSelector,
  } = useAsteroidOrders();

  return (
    <div className={styles.ordersListWrapper}>
      <h1 className={styles.ordersListTitle} >{asteroidOrders.length ? "Заказ отправлен!" : "Пустой заказ"}</h1>
      {!!asteroidOrders.length && asteroidOrders.map((asteroid) => {
        return (
          <AsteroidListItem
            key={asteroid.id}
            asteroid={asteroid}
            setOrders={setAsteroidOrders}
            distanceSelector={distanceSelector}
            isSent />
        )
      })}
    </div>
  )
}
