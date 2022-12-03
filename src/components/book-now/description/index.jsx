import React from "react";
import { AiFillPhone } from 'react-icons/ai';
import { DescriptionContainer, Description, CallNow } from "./styles";

const BookDescription = () => {
  return (
    <DescriptionContainer>
      <Description>
        <span>Book Now</span>
        <h2>
          Book your Appointment <br />
          Online.
        </h2>
        <p>Get 10% Discount on your first hair cut by using our website.</p>
        <button>Book Appointment</button>
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
