import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function BtnGoogleSignup() {
  return (
    <button className='btn-secondary rounded-md py-2'>
      <FontAwesomeIcon icon={faGoogle} />
      <span className='ml-2'>Sign up with Google</span>
    </button>
  );
}

export default BtnGoogleSignup;
