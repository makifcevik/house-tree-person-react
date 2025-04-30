import { Link } from "react-router-dom";
import BtnThemeToggler from "./buttons/BtnThemeToggler";
import ROUTES from "../routes/routes";
import BtnLanguageToggler from "./buttons/BtnLanguageToggler";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className='flex items-center justify-between p-common'>
      {/* Logo & Header */}
      <div className='flex items-center gap-2'>
        <Link to={ROUTES.HOME} className='flex items-center gap-2'>
          <img src='Logo.svg' className='h-8' alt='Logo' />{" "}
          <h1 className='leading-none'>
            House <span className='text-primary'>Tree</span> Person
          </h1>
        </Link>
      </div>

      {/* NavItems */}
      <div className='flex items-center gap-2'>
        <Button variant='link' asChild>
          <Link to={ROUTES.PUBLICATIONS}>{t("navbar.item1")}</Link>
        </Button>
        <Button variant='link' asChild>
          <Link to={ROUTES.PUBLICATIONS}>{t("navbar.item2")}</Link>
        </Button>
        <Button variant='link' asChild>
          <Link to={ROUTES.PUBLICATIONS}>{t("navbar.item3")}</Link>
        </Button>
        <Button variant='link' asChild>
          <Link to={ROUTES.PUBLICATIONS}>{t("navbar.item4")}</Link>
        </Button>
        <Button variant='link' asChild>
          <Link to={ROUTES.PUBLICATIONS}>{t("navbar.item5")}</Link>
        </Button>
        <Button variant='link' asChild>
          <Link to={ROUTES.PUBLICATIONS}>{t("navbar.item6")}</Link>
        </Button>
      </div>

      {/* Buttons (Theme & Language) */}
      <div className='flex items-center gap-2'>
        <BtnThemeToggler />
        <BtnLanguageToggler />
      </div>
    </nav>
  );
}

export default Navbar;
