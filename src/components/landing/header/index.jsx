import React from "react";
import { HeaderBar, Nav as Navigation } from "./styles";
import { FiMenu } from "react-icons/fi";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/contexts";
import SideMenu from "./sidebar";
import Nav from "../../Nav";

const Header = () => {
  const { sidebar, openSideBar } = useContext(ModalContext);

  return (
    <HeaderBar>
      <FiMenu onClick={openSideBar} />
      {sidebar && <SideMenu />}

      <Navigation>
        <Nav />
      </Navigation>
      <button>Book Now</button>
    </HeaderBar>
  );
};

export default Header;
