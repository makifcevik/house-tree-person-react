import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routes";

function BtnGetStarted({ className }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.SINGUP);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} btn-primary rounded-3xl px-12 py-3`}
    >
      Get Started
    </button>
  );
}

export default BtnGetStarted;
