import React, { useState, useEffect } from "react";
import { ITheme } from "../interfaces";

export const ThemeContext = React.createContext<ITheme>({
  theme: "",
  setTheme: () => {},
});
const ThemeContextProvider: React.FC<{ children: any }> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.getItem("theme");
      return theme || "dark";
    }
    setTheme(loadTheme());
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <div
        className={`${
          theme === "light" ? "theme-light" : "theme-dark"
        } bg-background transition-all duration-300 m-0 min-h-screen`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
