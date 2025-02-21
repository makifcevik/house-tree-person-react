import { Link } from "react-router-dom";
import BtnThemeToggler from "./buttons/BtnThemeToggler";
import ROUTES from "../routes/routes";
import BtnNavLogin from "./buttons/BtnNavLogin";
import BtnLanguageToggler from "./buttons/BtnLanguageToggler";

function Navbar() {
  return (
    <nav className='flex justify-between p-common align-middle '>
      {/* Logo&Header */}
      <div>
        <Link to={ROUTES.HOME} className='flex gap-2'>
          <img src='Logo.svg' className='-translate-y-0.5'></img>
          <h1 className='text-theme-color'>
            House <span className='text-primary'>Tree</span> Person
          </h1>
        </Link>
      </div>
      {/* NavItems */}
      <div className='flex-center lg:gap-8 gap-5 text-theme-color text-sm'>
        <h1 className='nav-item'>About</h1>
        <h1 className='nav-item'>Data & Samples</h1>
        <h1 className='nav-item'>Publications</h1>
        <h1 className='nav-item'>Contact</h1>
      </div>
      {/* Buttons */}
      <div className='flex lg:gap-5 gap-3'>
        <BtnThemeToggler />
        <BtnNavLogin />
        <BtnLanguageToggler />
      </div>
    </nav>
  );
}

export default Navbar;
