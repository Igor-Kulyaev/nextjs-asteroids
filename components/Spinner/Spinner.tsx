import styles from "./Spinner.module.css";
export const Spinner = () => {
  return (
    <div className={styles["lds-ripple"]}>
      <div></div>
      <div></div>
    </div>
  )
}