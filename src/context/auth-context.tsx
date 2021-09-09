import React, { useState } from "react";
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {},
  onLogIn: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logoutHandler = () => {
    setLoggedIn(false);
  };

  const loginHandler = () => {
    setLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogIn: loginHandler,
        onLogOut: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
