import {useEffect, useState} from "react";

export const useToastError = (delayClosure = 2500) => {
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    if (toastMessage) {
      setTimeout(() => setToastMessage(""), delayClosure);
    }
  }, [toastMessage]);

  return {
    toastMessage,
    setToastMessage
  }
}