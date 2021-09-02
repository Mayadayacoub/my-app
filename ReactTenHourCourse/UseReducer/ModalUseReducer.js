import React, { useEffect } from "react";

const ModalUseReducer = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1000);
  });
  return (
    <div className="modal">
      <p> {modalContent}</p>
    </div>
  );
};

export default ModalUseReducer;
