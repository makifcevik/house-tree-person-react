import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

const BtnLanguageToggler = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "tr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Button variant={"outline"} onClick={toggleLanguage}>
      {t("language")}
    </Button>
  );
};

export default BtnLanguageToggler;
