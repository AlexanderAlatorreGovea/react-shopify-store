import { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import PageTitle from "../../components/PageTitle/PageTitle";

const SignUpPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (): void => {};

  const handleChange = (): void => {};

  return (
    <div className="sign-in">
      <PageTitle className="sign-in">Sign Up Form</PageTitle>
      <h2>Sign in with your email and password</h2>
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
        <div className="buttons">
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
