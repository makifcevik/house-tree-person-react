import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routes";
import { useTranslation } from "react-i18next";

function BtnGetStarted({ className }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.SINGUP);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} btn-primary rounded-3xl px-12 py-3`}
    >
      {t("btnText.getStarted")}
    </button>
  );
}

export default BtnGetStarted;
