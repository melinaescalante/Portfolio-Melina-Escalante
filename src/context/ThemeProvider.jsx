import ThemeContext from "./ThemeContext";
import { useState } from "react";
import { useEffect } from "react";
const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export default ThemeProvider;
