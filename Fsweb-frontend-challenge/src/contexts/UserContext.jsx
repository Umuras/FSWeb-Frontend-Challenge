import { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

  return (
    <UserContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </UserContext.Provider>
  );
}
