import React from "react";
import ROUTES from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function BtnNavLogin() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(ROUTES.LOGIN)}
      className='btn-primary text-sm -translate-y-1 rounded-2xl px-4 py-2'
    >
      {t("btnText.login")}
    </button>
  );
}

export default BtnNavLogin;
