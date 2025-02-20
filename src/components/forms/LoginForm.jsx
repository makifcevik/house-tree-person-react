import React from "react";
import { Link } from "react-router-dom";
import BtnLogin from "../buttons/BtnLogin";
import BtnGoogleLogin from "../buttons/BtnGoogleLogin";
import PasswordInput from "../utils/PasswordInput";
import ROUTES from "../../routes/routes";

function LoginForm() {
  return (
    <form className='flex flex-col gap-8 text-theme-color'>
      <h1 className='section-header-lg mt-3'>Sign in</h1>

      {/* Email */}
      <div className='flex flex-col gap-1'>
        <label className='text-gray max-sm:text-sm' htmlFor='email'>
          Email
        </label>
        <input
          className='form-input'
          id='email'
          type='email'
          name='email'
          placeholder='example@example.com'
        ></input>
      </div>

      {/* Password */}
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between'>
          <label className='text-gray max-sm:text-sm' htmlFor='password'>
            Password
          </label>
          {/* TODO: Update link to forgot passoword page later*/}
          <Link className='underline max-sm:text-sm' to={ROUTES.SINGUP}>
            Forgot password?
          </Link>
        </div>
        <PasswordInput id='password' name='password' placeholder='Enter your password' />
      </div>

      {/* Remember me */}
      <div className='flex align-middle ml-1'>
        <input
          className='scale-150 mr-3'
          id='rememberMe'
          type='checkbox'
          name='rememberMe'
        />
        <label className='max-sm:text-sm' htmlFor='rememberMe'>
          Remember me
        </label>
      </div>

      <div className='flex flex-col gap-4 text-center'>
        <BtnLogin />
        <span className='max-sm:text-sm'>
          Don't have an account?
          <Link className='underline ml-1' to={ROUTES.SINGUP}>
            Sign up
          </Link>
        </span>

        <div className='flex items-center'>
          <div className='flex-grow border-t border-gray-dark'></div>
          <span className='px-3 text-gray-dark text-sm'>or</span>
          <div className='flex-grow border-t border-gray-dark'></div>
        </div>

        <BtnGoogleLogin />
      </div>
    </form>
  );
}

export default LoginForm;
