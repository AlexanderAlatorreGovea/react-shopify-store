import React from "react";
import ReactDOM from "react-dom";
import CustomButton from "../CustomButton/CustomButton";

import "./ErrorModal.scss";

interface Iprops {
  title: string;
  message: string;
  closeModalHandler: () => void;
}

interface IBackDrop {
  className: string;
  closeModalHandler: () => void;
}

const BackDrop: React.FC<IBackDrop> = ({ className, closeModalHandler }) => {
  return <div className={className} onClick={closeModalHandler}></div>;
};

const ModalOverlay: React.FC<Iprops> = ({
  title,
  message,
  closeModalHandler,
}) => {
  return (
    <div className="modal">
      <header className="modal__header">
        <h2>{title}</h2>
      </header>
      <div className="modal__content">
        <p>{message}</p>
      </div>
      <footer className="modal__actions">
        <CustomButton onClick={closeModalHandler}>Close</CustomButton>
      </footer>
    </div>
  );
};

const ErrorModal: React.FC<Iprops> = ({
  title,
  message,
  closeModalHandler,
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop className="backdrop" closeModalHandler={closeModalHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={title}
          message={message}
          closeModalHandler={closeModalHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default ErrorModal;
