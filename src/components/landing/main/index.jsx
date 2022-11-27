import React from "react";
import { MainText, ButtonsBox } from "./styles";

const MainDescription = () => {
  return (
    <MainText>
      <span>Welcome To Choppers</span>
      <h1>
        Best Hair Salon For A <br /> Professional Look
      </h1>
      <p>
        Choppers offers high performance <br />
        customized facials to provide you <br />
        with visible results.
      </p>

      <ButtonsBox>
        <button>Book Now</button>
        <button>All Services</button>
      </ButtonsBox>

    </MainText>
  );
};

export default MainDescription;
