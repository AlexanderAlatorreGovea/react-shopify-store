import React, { useState, useEffect } from "react";

import CustomButton from "../../components/CustomButton/CustomButton";
import ErrorModal from "../../components/ErrorModal/ErrorModal";
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

  const [formIsValid, setFormIsValid] = useState(false);

  const [error, setError] = useState(false);
  const [closedModal, setClosedModal] = useState(false);

  const { email, password } = userCredentials;

  const setErrorHandler = (): void => setError(true);

  const handleSubmit = (event): void => {
    event.preventDefault();

    if (formIsValid === false) {
      setErrorHandler();
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

  useEffect(() => {
   const identifier =  setTimeout(() => {
      setFormIsValid(email.includes("@") && password.trim().length > 8);
    }, 500);

    return () => {
      clearTimeout(identifier)
    }
  }, [email, password]);

  const closedModalHandler = (): void => {
    setClosedModal(!closedModal);
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
        {error && !closedModal ? (
          <ErrorModal
            closeModalHandler={closedModalHandler}
            data-testid="error"
            title="An error ocurred!"
            message="Please enter a correct email or password"
          />
        ) : (
          ""
        )}
        <div className="sign-up__buttons">
          <CustomButton closedModalHandler={closedModalHandler} type="submit">
            Sign in
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
