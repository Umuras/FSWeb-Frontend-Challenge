import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <UserContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </UserContext.Provider>
  );
}
