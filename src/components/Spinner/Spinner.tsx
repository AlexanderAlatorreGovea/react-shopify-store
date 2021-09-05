import React from "react";
import "./Spinner.scss";

const Spinner: React.FC = () => {
  return ( 
    <div className="spinner-wrapper" data-testid="spinner">
      <div className="spinner"></div>
    </div>
  );
}; 

export default Spinner;
