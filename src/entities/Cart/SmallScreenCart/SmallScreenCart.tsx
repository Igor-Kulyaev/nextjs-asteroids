import {IAsteroidListItem} from "@/src/models/asteroidsListModel";
import cls from "@/src/entities/Cart/BigScreenCart/BigScreenCart.module.css";

export const SmallScreenCart = ({asteroidOrders}: {asteroidOrders: IAsteroidListItem[]}) => {
  return (
    <div className={cls.cartContainer}>
      Small cart
    </div>
  )
}