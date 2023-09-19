import styles from "./Header.module.css";
export const Header = () => {
  return (
    <header>
      <div className={styles.logoContainer}>
        ARMAGEDDON 2023
      </div>
      <div className={styles.logoDescription}>
        <p>ООО “Команда им. Б. Уиллиса”.</p>
        <p>Взрываем астероиды с 1998 года.</p>
      </div>
    </header>
  )
}