import React from "react";
import image from "../../assets/images/landing/image.png";
import * as S from "./styles";
import Header from "../Header";

export const Landing = () => {
  return (
    <>
    <Header />
    <S.LandingContainer id="Home">
      <S.MainText>
        <span>Welcome To Choppers</span>
        <h1>
          Best Hair Salon For A <br /> Professional Look
        </h1>
        <p>
          Choppers offers high performance <br />
          customized facials to provide you <br />
          with visible results.
        </p>

        <S.ButtonsBox>
          <button>Book Now</button>
          <button>All Services</button>
        </S.ButtonsBox>
      </S.MainText>
      <S.Image src={image} alt="" />
    </S.LandingContainer>
    </>
  );
};
