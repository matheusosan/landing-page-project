import React from "react";
import image from "./image.png";
import { LandingContainer, Image, BlackFilter } from "./styles";
import Header from "./header";
import MainDescription from "./main";

export const Landing = () => {
  return (
    <LandingContainer>
      <BlackFilter />
      <Header />
      <MainDescription />
      <Image src={image} alt="" />
    </LandingContainer>
  );
};
