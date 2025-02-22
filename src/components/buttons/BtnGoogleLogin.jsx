import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

function BtnGoogleLogin() {
  const { t } = useTranslation();
  return (
    <button className='btn-secondary rounded-md py-2'>
      <FontAwesomeIcon icon={faGoogle} />
      <span className='ml-2'>{t("btnText.loginWithGoogle")}</span>
    </button>
  );
}

export default BtnGoogleLogin;
