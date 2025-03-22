import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface Props {
  id: string; // Since it is input id (css)
  name: string;
  placeholder: string;
}

function PasswordInput({ id, name, placeholder }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative'>
      <input
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        className='form-input'
      />
      <button
        type='button'
        className='absolute inset-y-0 right-3 flex items-center text-gray-500'
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <FontAwesomeIcon icon={faEyeSlash} className='text-gray' />
        ) : (
          <FontAwesomeIcon icon={faEye} className='-translate-x-0.5 text-gray' />
        )}
      </button>
    </div>
  );
}

export default PasswordInput;
