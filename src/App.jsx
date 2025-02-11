import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { ThemeProvider } from "./contexts/themeContext";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
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
