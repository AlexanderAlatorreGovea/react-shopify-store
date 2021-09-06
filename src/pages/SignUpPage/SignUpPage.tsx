import React, { useState } from "react";

import CustomButton from "../../components/CustomButton/CustomButton";
import FormInput from "../../components/FormInput/FormInput";
import PageTitle from "../../components/PageTitle/PageTitle";

import "./SignUpPage.scss";

interface ICredentials {
    email: string;
    password: string;
}

const SignUpPage: React.FC = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = (event): void => {
    event.preventDefault();

    const emailAndPassword: ICredentials = {
      email,
      password,
    };

    if (email.trim().length === 0 || password.trim().length < 8) {
      alert("Please Provide an Email or password");
      return;
    }

    setCredentials((prevState: ICredentials) => {
      return {
        ...prevState,
        email: "",
        password: "",
      };
    });
  };

  const handleChange = (event): void => {
    const { value, name } = event.target;

    setCredentials((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <div className="sign-up">
      <PageTitle className="sign-up__title">Sign Up Form</PageTitle>
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
          <CustomButton type="submit">Sign in</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
