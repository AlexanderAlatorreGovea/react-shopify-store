import React from "react";

interface IProps {
  children: React.ReactNode,
  otherProps: any
}

const PageTitle: React.FC<IProps> = ({ children, ...otherProps }) => {
  return ( 
    <>
      <h1 className={otherProps.className}>{children}</h1>
    </>
  );
}; 

export default PageTitle;
