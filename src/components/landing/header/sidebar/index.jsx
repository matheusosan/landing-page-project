import React from "react";
import { SideBar } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { ModalContext } from "../../../../contexts/contexts";
import Nav from "../../../Nav";

const SideMenu = () => {
  const { closeSideBar } = useContext(ModalContext);

  return (
    <SideBar>
      <AiOutlineClose onClick={closeSideBar}/>
        <Nav />
    </SideBar>
  );
};

export default SideMenu;
