import React from "react";
import ROUTES from "../../routes/routes";
import { useNavigate } from "react-router-dom";

function BtnNavLogin() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(ROUTES.SINGUP)}
      className='btn-primary text-sm -translate-y-1 rounded-2xl px-4 py-2'
    >
      Login
    </button>
  );
}

export default BtnNavLogin;
