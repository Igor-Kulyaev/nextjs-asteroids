import styles from "./Toast.module.css";
import {ToastType} from "@/src/models/sharedModel";
export interface IToastProps {
  message: string;
  type?: ToastType;
}
export const Toast = ({message, type = ToastType.Error}: IToastProps) => {
  const toastType = type === ToastType.Error ? "error" : "notification"
  return (
    <div className={`${styles.snackbar} ${message ? styles.show : ""} ${styles[toastType]}`}>
      {message}
    </div>
  )
}