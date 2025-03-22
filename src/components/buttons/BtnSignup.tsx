import React from "react";
import { useTranslation } from "react-i18next";

function BtnSignup() {
  const { t } = useTranslation();
  return <button className='btn-primary rounded-md py-2'>{t("btnText.signup")}</button>;
}

export default BtnSignup;
