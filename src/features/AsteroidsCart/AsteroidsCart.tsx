import {IAsteroidListItem} from "@/src/models/asteroidsListModel";
import {makeRusPluralization} from "@/src/utils/utils";
import styles from "./AsteroidsCart.module.css";

export const AsteroidsCart = ({asteroidOrders}: {asteroidOrders: IAsteroidListItem[]}) => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartInfo}>
        <p className={styles.cartTitle}>Корзина</p>
        <p className={styles.cartCounter}>{makeRusPluralization(["астероид", "астероида", "астероидов"], asteroidOrders.length)}</p>
      </div>
      <div className={styles.cartBtnWrapper}>
        <button className={styles.cartBtn}>Отправить</button>
      </div>
    </div>
  )
}