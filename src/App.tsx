import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/themeContext";
import { useRoutes } from "react-router-dom";
import routesConfig from "./routes/routesConfig";

export default function App() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") || "dark");

  // Routing
  const routes = useRoutes(routesConfig);

  const toggleTheme = () => {
    setThemeMode((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // Update themes on change
  useEffect(() => {
    document.querySelector("html")?.classList.remove("dark", "light");
    document.querySelector("html")?.classList.add(themeMode);
  }, [themeMode]);

  return <ThemeProvider value={{ themeMode, toggleTheme }}>{routes}</ThemeProvider>;
}
