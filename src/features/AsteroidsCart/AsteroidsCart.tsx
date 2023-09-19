import {IAsteroidListItem} from "@/src/models/asteroidsListModel";
import {makeRusPluralization} from "@/src/shared/utils/utils";
import styles from "./AsteroidsCart.module.css";
import {useRouter} from "next/router";
import {useState} from "react";
import {Spinner} from "@/src/shared/ui/Spinner/Spinner";
import {SmallSpinner} from "@/src/shared/ui/SmallSpinner/SmallSpinner";

export const AsteroidsCart = ({asteroidOrders}: {asteroidOrders: IAsteroidListItem[]}) => {
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  const router = useRouter();

  const submitOrders = () => {
    setIsLoadingSubmit(true);
    setTimeout(() => {
      setIsLoadingSubmit(false);
      router.push('/orders');
    }, 1000);
  }

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartInfo}>
        <p className={styles.cartTitle}>Корзина</p>
        <p className={styles.cartCounter}>{makeRusPluralization(["астероид", "астероида", "астероидов"], asteroidOrders.length)}</p>
      </div>
      <div className={styles.cartBtnWrapper}>
        {!isLoadingSubmit ? (
          <button className={styles.cartBtn} onClick={submitOrders} disabled={!asteroidOrders.length} >
            Отправить
          </button>
        ) : (
          <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}><SmallSpinner /></div>
        )}
      </div>
    </div>
  )
}