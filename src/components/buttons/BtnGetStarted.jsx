import { useNavigate } from "react-router-dom";

function BtnGetStarted({ className }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
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
