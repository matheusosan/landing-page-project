import React, { useContext } from "react";
import { StyledModal } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { ModalContext } from "../../../../contexts/contexts";
import { useForm } from "react-hook-form";

const ModalContent = () => {
  const { closeModal } = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <StyledModal>
      <AiOutlineClose onClick={closeModal} />

    </StyledModal>
  );
};

export default ModalContent;
