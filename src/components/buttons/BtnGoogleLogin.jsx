import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function BtnGoogleLogin() {
  return (
    <button className='btn-secondary rounded-md py-2'>
      <FontAwesomeIcon icon={faGoogle} />
      <span className='ml-2'>Login with Google</span>
    </button>
  );
}

export default BtnGoogleLogin;
