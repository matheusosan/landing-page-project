import React from "react";
import image from "../../assets/images/landing/image.png";
import { LandingContainer, Image } from "./styles";
import Header from "./header";
import MainDescription from "./main";

export const Landing = () => {

  return (
    <LandingContainer>
      <Header />
      <MainDescription />
      <Image src={image} alt="" />
    </LandingContainer>
  );
};
