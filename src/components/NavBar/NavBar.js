import React from "react";
import { Bar, Homelink, OptionsCont, PagesLinks } from "./NavBarstyles";

const NavBar = (props) => {
  return (
    <Bar>
      <Homelink to="/">CheapEps</Homelink>
      <OptionsCont>
        <PagesLinks to="/naturales">Naturales</PagesLinks>
        <PagesLinks to="/artificiales">Artificiales</PagesLinks>
        <PagesLinks to="/login">Registrarme</PagesLinks>
        <PagesLinks to="/">Hola, {props.nombre}</PagesLinks>
      </OptionsCont>
    </Bar>
  );
};

export default NavBar;
