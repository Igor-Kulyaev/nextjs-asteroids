import AsteroidsList from "@/src/features/AsteroidsList/AsteroidsList";
import {OrdersList} from "@/src/features/OrdersList/OrdersList";
import {useAsteroidOrders} from "@/src/hooks/useAsteroidOrders";
import {IAsteroidListItem} from "@/src/models/asteroidsListModel";
import {useEffect, useState} from "react";
import styles from "@/src/styles/Orders.module.css";

export default function Orders() {
  const {setAsteroidOrders} = useAsteroidOrders();

  // State variable to track whether you're on the orders page
  const [isOnOrdersPage, setIsOnOrdersPage] = useState(true);

  // Clear the asteroidOrders state when leaving the orders page
  useEffect(() => {
    return () => {
      if (!isOnOrdersPage) {
        setAsteroidOrders([]);
      }
    };
  }, [isOnOrdersPage, setAsteroidOrders]);

  // Set isOnOrdersPage to false when leaving the page
  useEffect(() => {
    return () => {
      setIsOnOrdersPage(false);
    };
  }, []);

  return (
    <>
      <OrdersList />
      <div className={styles.footer}>© Все права и планета защищены</div>
    </>
  )
}