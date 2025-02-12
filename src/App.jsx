import { useEffect, useState } from "react";
import { HomePage } from "./pages/HomePage";
import { ThemeProvider } from "./contexts/themeContext";
import { useRoutes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme") || "light");

  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/login", element: <LoginPage /> },
  ]);

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

  return <ThemeProvider value={{ themeMode, toggleTheme }}>{routes}</ThemeProvider>;
}
