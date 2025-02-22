import React from "react";
import { Link } from "react-router-dom";
import BtnLogin from "../buttons/BtnLogin";
import BtnGoogleLogin from "../buttons/BtnGoogleLogin";
import PasswordInput from "../utils/PasswordInput";
import ROUTES from "../../routes/routes";
import { useTranslation } from "react-i18next";

function LoginForm() {
  const { t } = useTranslation();
  return (
    <form className='flex flex-col gap-8 text-theme-color'>
      <h1 className='section-header-lg mt-3'>{t("loginFormText.header")}</h1>

      {/* Email */}
      <div className='flex flex-col gap-1'>
        <label className='text-gray max-sm:text-sm' htmlFor='email'>
          {t("loginFormText.email")}
        </label>
        <input
          className='form-input'
          id='email'
          type='email'
          name='email'
          placeholder={t("loginFormText.emailPlaceholder")}
        ></input>
      </div>

      {/* Password */}
      <div className='flex flex-col gap-1'>
        <div className='flex justify-between'>
          <label className='text-gray max-sm:text-sm' htmlFor='password'>
            {t("loginFormText.password")}
          </label>
          {/* TODO: Update link to forgot passoword page later*/}
          <Link className='underline max-sm:text-sm' to={ROUTES.SINGUP}>
            {t("loginFormText.forgotPassword")}
          </Link>
        </div>
        <PasswordInput
          id='password'
          name='password'
          placeholder={t("loginFormText.passwordPlaceholder")}
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
          {t("loginFormText.rememberMe")}
        </label>
      </div>

      <div className='flex flex-col gap-4 text-center'>
        <BtnLogin />
        <span className='max-sm:text-sm'>
          {t("loginFormText.noAccount")}
          <Link className='underline ml-1' to={ROUTES.SINGUP}>
            {t("loginFormText.referToSignup")}
          </Link>
        </span>

        <div className='flex items-center'>
          <div className='flex-grow border-t border-gray-dark'></div>
          <span className='px-3 text-gray-dark text-sm'>{t("loginFormText.or")}</span>
          <div className='flex-grow border-t border-gray-dark'></div>
        </div>

        <BtnGoogleLogin />
      </div>
    </form>
  );
}

export default LoginForm;
