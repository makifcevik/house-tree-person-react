import React from "react";
import { Link } from "react-router-dom";
import PasswordInput from "../utils/PasswordInput";
import BtnSignup from "../buttons/btnSignup";
import BtnGoogleSignup from "../buttons/btnGoogleSignup";
import ROUTES from "../../routes/routes";
import { useTranslation } from "react-i18next";

function SignupForm() {
  const { t } = useTranslation();
  return (
    <form className='flex flex-col gap-3 text-theme-color'>
      <h1 className='section-header-lg mt-3'>{t("signupFormText.header")}</h1>

      {/* Email */}
      <div className='flex flex-col gap-1'>
        <label className='text-gray max-sm:text-sm' htmlFor='email'>
          {t("signupFormText.email")}
        </label>
        <input
          className='form-input'
          id='email'
          type='email'
          name='email'
          placeholder={t("signupFormText.emailPlaceholder")}
        ></input>
      </div>

      {/* Password */}
      <div className='flex flex-col gap-1'>
        <label className='text-gray max-sm:text-sm' htmlFor='password'>
          {t("signupFormText.password")}
        </label>
        <PasswordInput
          id='password'
          name='password'
          placeholder={t("signupFormText.passwordPlaceholder")}
        />
      </div>

      {/* Password Again */}
      <div className='flex flex-col gap-1'>
        <label className='text-gray max-sm:text-sm' htmlFor='passwordAgain'>
          {t("signupFormText.passwordAgain")}
        </label>
        <PasswordInput
          id='passwordAgain'
          name='passwordAgain'
          placeholder={t("signupFormText.passwordAgainPlaceholder")}
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
          {t("signupFormText.rememberMe")}
        </label>
      </div>

      {/* Buttons Section */}
      <div className='flex flex-col gap-3 text-center'>
        <BtnSignup />
        <span className='max-sm:text-sm'>
          {t("signupFormText.hasAccount")}
          <Link className='underline ml-1' to={ROUTES.LOGIN}>
            {t("signupFormText.referToLogin")}
          </Link>
        </span>

        <div className='flex items-center'>
          <div className='flex-grow border-t border-gray-dark'></div>
          <span className='px-3 text-gray-dark text-sm'>{t("signupFormText.or")}</span>
          <div className='flex-grow border-t border-gray-dark'></div>
        </div>
        <BtnGoogleSignup />
      </div>
    </form>
  );
}

export default SignupForm;
