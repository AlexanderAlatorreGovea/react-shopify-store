import React, { useState } from "react";

import CustomButton from "../../components/CustomButton/CustomButton";
import FormInput from "../../components/FormInput/FormInput";
import PageTitle from "../../components/PageTitle/PageTitle";

import './SignUpPage.scss';

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (): void => {};

  const handleChange = (): void => {};

  return (
    <div className="sign-up">
      <PageTitle classes="sign-up__title">Sign Up Form</PageTitle>
      <h2>Already have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="sign-up__buttons">
          <CustomButton  type='submit'>
          Sign in
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
