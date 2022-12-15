import React, { useContext } from "react";
import { StyledModal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { ModalContext } from "../../../../contexts/contexts";

const ModalContent = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <StyledModal>
      <AiOutlineClose onClick={closeModal} />
      <h2>Agende seu horário!</h2>
      <label htmlFor="">Marque o dia</label>
      <input type="date" />
      <label htmlFor="">Marque a hora</label>
      <input type="time" />
    </StyledModal>
  );
};

export default ModalContent;
