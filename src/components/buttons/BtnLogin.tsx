import React from "react";
import { useTranslation } from "react-i18next";

function BtnLogin() {
  const { t } = useTranslation();
  return <button className='btn-primary rounded-md py-2'>{t("btnText.login")}</button>;
}

export default BtnLogin;
