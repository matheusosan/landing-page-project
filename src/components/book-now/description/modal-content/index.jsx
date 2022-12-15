import React from "react";
import { StyledModal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

const ModalContent = ({ modal, setModal, closeModal }) => {
  return (
    <StyledModal>
      <AiOutlineClose onClick={closeModal} />
      <h2>Agende seu horário!</h2>
      <label htmlFor="">
        Marque o dia
      </label>
      <input type="date" />
      <label htmlFor="">
        Marque a hora
      </label>
      <input type="time" />
    </StyledModal>
  );
};

export default ModalContent;
