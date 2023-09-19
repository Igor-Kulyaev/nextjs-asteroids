import cls from "./BigScreenCart.module.css";
import {IAsteroidListItem} from "@/src/models/asteroidsListModel";

export const BigScreenCart = ({asteroidOrders}: {asteroidOrders: IAsteroidListItem[]}) => {
  return (
    <div className={cls.cartContainer}>
      <div className={cls.cartTop}>
        <p className={cls.cartTitle}>Корзина</p>
        <p className={cls.cartCounter}>Кол-во астероидов {asteroidOrders.length}</p>
      </div>
      <div className={cls.cartBtnWrapper}>
        <button className={cls.cartBtn}>Отправить</button>
      </div>
    </div>
  )
}