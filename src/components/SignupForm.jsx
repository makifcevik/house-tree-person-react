import React from "react";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import BtnSignup from "./buttons/btnSignup";
import BtnGoogleSignup from "./buttons/btnGoogleSignup";
import ROUTES from "../routes/routes";

function SignupForm() {
  return (
    <form className='flex flex-col gap-3 text-theme-color'>
      <h1 className='text-4xl text-theme-color font-black mt-3'>Sign up</h1>

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
        <label className='text-gray max-sm:text-sm' htmlFor='password'>
          Password
        </label>
        <PasswordInput id='password' name='password' placeholder='Enter your password' />
      </div>

      {/* Password Again */}
      <div className='flex flex-col gap-1'>
        <label className='text-gray max-sm:text-sm' htmlFor='passwordAgain'>
          Password
        </label>
        <PasswordInput
          id='passwordAgain'
          name='passwordAgain'
          placeholder='Password again'
        />
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

      {/* Buttons Section */}
      <div className='flex flex-col gap-3 text-center'>
        <BtnSignup />
        <span className='max-sm:text-sm'>
          Already have an account?
          <Link className='underline ml-1' to={ROUTES.LOGIN}>
            Sign in
          </Link>
        </span>

        <div className='flex items-center'>
          <div className='flex-grow border-t border-gray-dark'></div>
          <span className='px-3 text-gray-dark text-sm'>or</span>
          <div className='flex-grow border-t border-gray-dark'></div>
        </div>
        <BtnGoogleSignup />
      </div>
    </form>
  );
}

export default SignupForm;
