import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import "./CustomButton.scss";

interface IProps {
  [x: string]: any;
  children?: any;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  otherProps?: any;
  onClick?: () => void;
}

const CustomButton: React.FC<IProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  //you have access to ctx.isLoggedIn
  const ctx = useContext(AuthContext);
  return (
      <button
        className={`${inverted ? "inverted" : ""} ${
          isGoogleSignIn ? "google-sign-in" : ""
        } custom-button`}
        {...otherProps}
        onClick={otherProps.onClick}
      >
        {children}
      </button>
  );
};
export default CustomButton;
