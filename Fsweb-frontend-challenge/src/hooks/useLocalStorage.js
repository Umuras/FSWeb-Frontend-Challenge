import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [data, setData] = useState(() => {
    const localValue = JSON.parse(localStorage.getItem(key));

    if (localValue) {
      return localValue;
    } else {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const updateStorage = (newValue) => {
    setData(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [data, updateStorage];
}
