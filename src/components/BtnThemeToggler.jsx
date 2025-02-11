import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useTheme from "../contexts/themeContext";

function BtnThemeToggler() {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {themeMode === "light" ? (
        <FontAwesomeIcon icon={faSun} size='lg' className='text-primary pb-2' />
      ) : (
        <FontAwesomeIcon icon={faMoon} size='lg' className='mr-1 pb-2' />
      )}
    </button>
  );
}

export default BtnThemeToggler;
