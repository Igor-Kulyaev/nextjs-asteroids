import styles from "./Header.module.css";
import Link from "next/link";
export const Header = () => {
  return (
    <header>
      <div className={styles.logoContainer}>
        <Link href={"/"}>ARMAGEDDON 2023</Link>
      </div>
      <div className={styles.logoDescription}>
        <p>ООО “Команда им. Б. Уиллиса”.</p>
        <p>Взрываем астероиды с 1998 года.</p>
      </div>
    </header>
  )
}