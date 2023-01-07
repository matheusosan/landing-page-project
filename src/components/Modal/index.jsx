import React, { useContext } from "react";
import { StyledModal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { ModalContext } from "../../contexts/contexts";
import Form from "../Form/Form";

const ModalContent = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <StyledModal>
      <AiOutlineClose onClick={closeModal} />
      <Form />
    </StyledModal>
  );
};

export default ModalContent;
