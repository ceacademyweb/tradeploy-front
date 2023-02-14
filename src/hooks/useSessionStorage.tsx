import {useState} from "react";

export const useSessionStorage = (key:any, initialValue:any) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  })
  const setValue = (value:any) => {
    try {
      setStoredValue(value);
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error);
    }
  }
}
