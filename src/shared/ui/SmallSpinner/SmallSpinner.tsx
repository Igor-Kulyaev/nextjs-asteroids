import styles from "./SmallSpinner.module.css";
export const SmallSpinner = () => {
  return (
    <div className={styles["lds-hourglass"]}></div>
  )
}