import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useTheme from "../../contexts/themeContext";
import { Button } from "../ui/button";

function BtnThemeToggler() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      {themeMode === "light" ? (
        <FontAwesomeIcon icon={faSun} size='lg' />
      ) : (
        <FontAwesomeIcon icon={faMoon} size='lg' />
      )}
    </Button>
  );
}

export default BtnThemeToggler;
