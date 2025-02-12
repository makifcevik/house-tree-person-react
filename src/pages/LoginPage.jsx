import React from "react";
import FormWrapper from "../components/FormWrapper";
import LoginForm from "../components/LoginForm";
import BtnThemeToggler from "../components/buttons/BtnThemeToggler";
import Navbar from "../components/Navbar";
import WelcomePanel from "../components/WelcomePanel";

function LoginPage() {
  return (
    <div className='page-default'>
      {/* <div className='flex justify-end p-common text-sm'>
        <BtnThemeToggler />
      </div> */}
      <Navbar />
      <div className='flex flex-col lg:flex-row justify-center items-center gap-20'>
        <FormWrapper>
          <LoginForm />
        </FormWrapper>
        <WelcomePanel className='order-last lg:order-first' />
      </div>
    </div>
  );
}

export default LoginPage;
