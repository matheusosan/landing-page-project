import React from "react";
import * as S from "./styles";
import { FiMenu } from "react-icons/fi";
import { useContext } from "react";
import { ModalContext } from "../../contexts/contexts";
import SideMenu from "../Sidebar";

const Header = () => {
  const { sidebar, openSideBar } = useContext(ModalContext);

  return (
      <S.HeaderBar>
        <FiMenu onClick={openSideBar} />
        {sidebar && <SideMenu />}
        <div>
          <a href="#Home">LOGO</a>
        </div>

        <S.Nav>
          <a href="#About">About</a>
          <a href="#BookNow">Book Now</a>
          <a href="#WorkingDays">Working Days</a>
          <a href="#Testimonials">Testimonials</a>
          <a href="#Affiliate">Affiliate</a>
          <a href="#OurLocation">Visit Us</a>
        </S.Nav>
        <button>Book Now</button>
      </S.HeaderBar>
  );
};

export default Header;
