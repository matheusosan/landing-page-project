import * as S from "./styles";
import React, { useContext } from "react";
import Modal from "react-modal";
import { AiFillPhone } from "react-icons/ai";
import ModalContent from "../Modal/index"
import { ModalContext } from "../../contexts/contexts";
import { CustomStyles } from "../Modal/modal";

export const Book = () => {
  const { modal, openModal, closeModal } = useContext(ModalContext);

  return (
    <S.BookContainer  id="BookNow">
      <S.DescriptionContainer>
        <S.Description>
          <span>Book Now</span>
          <h2>
            Book your Appointment <br />
            Online.
          </h2>
          <p>Get 10% Discount on your first hair cut by using our website.</p>
          <button onClick={openModal}>Book Appointment</button>

          <Modal
            isOpen={modal}
            onRequestClose={closeModal}
            style={CustomStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <ModalContent />
          </Modal>
        </S.Description>
        <S.CallNow>
          <div>
            <AiFillPhone />
          </div>
          <h2>Call Now</h2>
          <p>0300 7715325</p>
        </S.CallNow>
      </S.DescriptionContainer>
    </S.BookContainer>
  );
};
