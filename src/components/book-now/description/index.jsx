import React, { useContext } from "react";
import Modal from "react-modal";
import { AiFillPhone } from "react-icons/ai";
import { DescriptionContainer, Description, CallNow } from "./styles";
import ModalContent from "./modal-content";
import { ModalContext } from "../../../contexts/contexts";
import { CustomStyles } from "./modal-content/modal";

const BookDescription = () => {
  const { modal, openModal, closeModal } = useContext(ModalContext);

  return (
    <DescriptionContainer>
      <Description>
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
      </Description>
      <CallNow>
        <div>
          <AiFillPhone />
        </div>
        <h2>Call Now</h2>
        <p>0300 7715325</p>
      </CallNow>
    </DescriptionContainer>
  );
};

export default BookDescription;
