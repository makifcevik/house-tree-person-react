import React from "react";
import FormWrapper from "../components/forms/FormWrapper";
import Navbar from "../components/Navbar";
import WelcomePanel from "../components/WelcomePanel";
import SignupForm from "../components/forms/SignupForm";

function SignupPage() {
  return (
    <div className='page-default page-default-colors'>
      <Navbar />
      <div className='flex flex-col lg:flex-row justify-center items-center gap-20'>
        <FormWrapper>
          <SignupForm />
        </FormWrapper>
        <WelcomePanel className='order-last lg:order-first' />
      </div>
    </div>
  );
}

export default SignupPage;
