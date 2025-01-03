import { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [language, setLanguage] = useLocalStorage("lang", "turkish");
  const [token, setToken] = useLocalStorage(
    "token",
    "asdkjasldkjsalkdjsaasjdlksajdlksaj"
  );

  return (
    <UserContext.Provider
      value={{ darkMode, setDarkMode, language, setLanguage, token }}
    >
      {children}
    </UserContext.Provider>
  );
}
