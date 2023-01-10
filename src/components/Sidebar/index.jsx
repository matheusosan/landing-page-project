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
          <a href="#About" onClick={closeSideBar}>About</a>
          <a href="#BookNow" onClick={closeSideBar}>Book Now</a>
          <a href="#WorkingDays" onClick={closeSideBar}>Working Days</a>
          <a href="#Testimonials" onClick={closeSideBar}>Testimonials</a>
          <a href="#Affiliate" onClick={closeSideBar}>Affiliate</a>
          <a href="#OurLocation" onClick={closeSideBar}>Visit Us</a>
        </div>
    </S.SideBar>
  );
};

export default SideMenu;
