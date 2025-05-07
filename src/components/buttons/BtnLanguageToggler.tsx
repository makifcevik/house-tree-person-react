import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/Button";

const BtnLanguageToggler = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  return (
    <Button variant={"outline"} onClick={toggleLanguage}>
      {t("language")}
    </Button>
  );
};

export default BtnLanguageToggler;
