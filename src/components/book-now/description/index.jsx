import React, { useState } from "react";
import Modal from "react-modal";
import { AiFillPhone } from "react-icons/ai";
import { DescriptionContainer, Description, CallNow } from "./styles";
import ModalContent from "./modal-content";

const BookDescription = (props) => {
  const [modal, setModal] = useState(false);

  const openModal = (modal) => {
    setModal(true);
  };

  const closeModal = (modal) => {
    setModal(false);
  };

  // MODAL
  const customStyles = {
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: "50%",
      height: "50%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

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
          style={customStyles}
          contentLabel="Example Modal"
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
