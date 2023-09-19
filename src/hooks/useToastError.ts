import {useEffect, useState} from "react";

export const useToastError = (delayClosure = 2500) => {
  const [toastError, setToastError] = useState<string>("");

  useEffect(() => {
    if (toastError) {
      setTimeout(() => setToastError(""), delayClosure);
    }
  }, [toastError]);

  return {
    toastError,
    setToastError
  }
}