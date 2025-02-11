import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { ThemeProvider } from "./contexts/themeContext";

export default function App() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setThemeMode((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  // update themes on change
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, toggleTheme }}>
      <HomePage />
    </ThemeProvider>
  );
}
