import React from "react";
import { Landing } from "../landing/index";
import AboutUs from "../about/index";
import { Book } from "../book-now/index";
import PageFooter from "../footer/index";
import { NavBox } from "./styled";

const Nav = () => {
  const navigation = [
    { id: "Home", name: "Home", path: <Landing /> },
    { id: "AboutUs", name: "About Us", path: <AboutUs /> },
    { id: "Book", name: "Book Now", path: <Book /> },
    { id: "Footer", name: "Contact Us", path: <PageFooter /> },
  ];

  return (
    <>
      <NavBox>
        {navigation.map((nav) => (
          <a href={nav.path}>{nav.name}</a>
        ))}
      </NavBox>
    </>
  );
};

export default Nav;
