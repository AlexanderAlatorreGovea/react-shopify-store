import React from "react";
import "./CustomButton.scss";

interface IProps {
  [x: string]: any;
  children?: any;
  isGoogleSignIn?: boolean;
  inverted?: boolean; 
  otherProps?: any
  onClick?: () => void
} 

const CustomButton: React.FC<IProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
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

export default CustomButton;
