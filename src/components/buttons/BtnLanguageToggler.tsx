import React from "react";
import { useTranslation } from "react-i18next";

const BtnLanguageToggler = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "tr" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button
      className='btn-secondary px-3 py-1 rounded-full -translate-y-1'
      onClick={toggleLanguage}
    >
      {t("language")}
    </button>
  );
};

export default BtnLanguageToggler;
