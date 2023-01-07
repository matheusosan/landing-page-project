import React from "react";
import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { ModalContext } from "../../contexts/contexts";

const SideMenu = () => {
  const { closeSideBar } = useContext(ModalContext);

  return (
    <S.SideBar>
      <AiOutlineClose onClick={closeSideBar} />
      <div>
        <a href="#About">About</a>
        <a href="#BookNow">Book Now</a>
        <a href="#WorkingDays">Working Days</a>
        <a href="#Testimonials">Testimonials</a>
        <a href="#Affiliate">Affiliate</a>
        <a href="#Footer">Footer</a>
      </div>
    </S.SideBar>
  );
};

export default SideMenu;
